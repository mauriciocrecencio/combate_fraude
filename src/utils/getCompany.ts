import { apiCompanies } from '../services/apiCompanies'

export const getCompany = async (cnpj: string) => {
  const company = await apiCompanies
    .get(`?cnpj=${cnpj}`)
    .then(res => res.data)
    .catch(err => console.log(err))
  return company
}
