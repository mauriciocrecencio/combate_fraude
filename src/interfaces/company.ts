import { Document } from 'mongoose'

export interface ICompany extends Document {
  cnpj: string
  uf: string
  razao_social: string
  qsa: IPartner[]
}

export interface IPartner {
  cpf_cnpj_socio: string
  nome_socio: string
  qualificacao_socio: string
  tipo_socio: string
}
