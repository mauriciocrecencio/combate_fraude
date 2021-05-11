import mongoose from 'mongoose'
import ICompany from 'src/interfaces/company'

const companySchema = new mongoose.Schema({
  cnpj: String,
  uf: String,
  razao_social: String,
  qsa: [
    { cpf_cnpj_socio: String, nome_socio: String, qualificacao_socio: String, tipo_socio: String },
  ],
})

export default mongoose.model<ICompany>('Company', companySchema)
