import controller from '@controllers/company'
import { Router } from 'express'

const routes = Router()

routes.get('/companies/cache/:cnpj', controller.getCachedCompany)
routes.get('/companies/real_time/:cnpj', controller.getRealTimeCompany)

export default routes
