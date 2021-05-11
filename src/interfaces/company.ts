import { Document } from 'mongoose'

export default interface ICompany extends Document {
  cnpj: string
  uf: string
  razao_social: string
  qsa: Partner[]
}

interface Partner {
  cpf_cnpj_socio: string
  nome_socio: string
  qualificacao_socio: string
  tipo_socio: string
}
