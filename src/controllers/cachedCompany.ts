import Company from '@models/company'
import { Request, Response } from 'express'
import { getCompany } from '../utils/getCompany'
import { getPartners } from '../utils/getPartners'

import { ICompany, IPartner } from '../interfaces/company'

const save = async (company: ICompany, partners: IPartner[]) => {
  const newCompany = { ...company, qsa: [...partners] }
  return await new Company(newCompany).save()
}

export const get = async (req: Request, res: Response) => {
  const cnpj = String(req.params.cnpj)
  if (cnpj.length > 14) {
    return res.status(400).json({
      message: `Make sure the value is a maximum of 14 characters (it has ${cnpj.length}).`,
    })
  }

  const companyInDatabase = await Company.findOne({ cnpj })

  if (companyInDatabase) {
    return res.status(200).json({ company: companyInDatabase })
  }
  const fetchedCompanyData = await getCompany(cnpj)

  if (fetchedCompanyData === 429) {
    return res.status(429).json({ message: 'Too many requests, take it easy my friend! :)' })
  }

  if (fetchedCompanyData.count === 0) {
    return res.status(400).json({ message: `No company was found with CNPJ: ${cnpj}` })
  }

  const fetchedCompany = fetchedCompanyData.results[0]

  const partners = await getPartners(fetchedCompany.cnpj)
  const newCompany = await save(fetchedCompany, partners)

  return res.status(200).json({ company: newCompany })
}
