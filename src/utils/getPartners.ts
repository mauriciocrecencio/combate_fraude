import { apiPartners } from '../services/apiPartners'

export const getPartners = async (cnpj: string) => {
  const partners = await apiPartners
    .get(`/?cnpj=${cnpj}`)
    .then(res => res.data.results)
    .catch(err => console.log(err))
  return partners
}
