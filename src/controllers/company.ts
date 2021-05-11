import Company from '@models/company'
import { Request, Response } from 'express'
import { API } from '../services/getCompany'
import ICompany from '../interfaces/company'

const companyURI = '/empresas/data/?cnpj='
const partnersURI = '/socios/data/?cnpj='

const getPartners = async (cnpj: string) => {
  const partners = await API.get(partnersURI + cnpj)
    .then(res => res.data.results)
    .catch(err => console.log(err))
  return partners
}

const getCompany = async (cnpj: string) => {
  const company = await API.get(companyURI + cnpj)
    .then(res => res.data)
    .catch(err => err.response.status)
  return company
}

const saveCompany = async (company: ICompany) => {
  const partners = await getPartners(company.cnpj)
  const newCompany = { ...company, qsa: [...partners] }

  const savedCompany = new Company(newCompany).save()
  return savedCompany
}

const updateAndSaveCompany = async (company: ICompany) => {
  const cnpj = company.cnpj
  const partners = await getPartners(cnpj)
  const newCompany = { ...company, qsa: [...partners] }
  const companyInDatabase = await Company.findOne({ cnpj })
  if (companyInDatabase) {
    const updatedCompany = await Company.findOneAndUpdate({ cnpj }, newCompany, { new: true })
    return updatedCompany
  }
  const savedNewCompany = await new Company(newCompany).save()
  return savedNewCompany
}

const isTooManyRequests = (statusCode: number) => {
  return statusCode === 429
}

const getCachedCompany = async (req: Request, res: Response) => {
  const cnpj = String(req.params.cnpj)
  const companyInDatabase = await Company.findOne({ cnpj })

  if (companyInDatabase) {
    return res.status(200).json({ company: companyInDatabase })
  }
  const fetchCompanyData = await getCompany(cnpj)

  if (isTooManyRequests(fetchCompanyData)) {
    return res.status(429).json({ message: 'Too many requests, take it easy my friend! :)' })
  }

  if (fetchCompanyData.count === 0) {
    return res.status(200).json({ message: `No company was found with CNPJ: ${cnpj}` })
  }

  const newCompanySaved = await saveCompany(fetchCompanyData.results[0])

  return res.status(200).json({ company: newCompanySaved })
}

const getRealTimeCompany = async (req: Request, res: Response) => {
  const cnpj = String(req.params.cnpj)
  const fetchCompanyData = await getCompany(cnpj)

  if (isTooManyRequests(fetchCompanyData)) {
    return res.status(429).json({ message: 'Too many requests, take it easy my friend! :)' })
  }

  if (fetchCompanyData.count === 0) {
    return res.status(200).json({ message: `No company was found with CNPJ: ${cnpj}` })
  }

  const newCompanySaved = await updateAndSaveCompany(fetchCompanyData.results[0])

  return res.status(200).json({ company: newCompanySaved })
}

export default { getCachedCompany, getRealTimeCompany }
