import { get as getUpdatedCompany } from '@controllers/updatedCompany'
import { get as getCachedCompany } from '@controllers/cachedCompany'
import { Router } from 'express'

const routes = Router()

routes.get('/company/updated/:cnpj', getUpdatedCompany)
routes.get('/company/cache/:cnpj', getCachedCompany)
routes.get('/', (req, res) =>
  res.status(400).json({
    message: 'Invalid route',
    validRoutes: ['/companies/updated/:cnpj', '/companies/cache/:cnpj'],
  })
)
routes.get('*', (req, res) => res.redirect('/'))

export default routes
