import { apiCompanies } from '../services/apiCompanies'

export const getCompany = async (cnpj: string) => {
  const company = await apiCompanies
    .get(cnpj)
    .then(res => res.data)
    .catch(err => err.response.status)
  return company
}
