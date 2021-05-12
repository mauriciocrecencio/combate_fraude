import { get as getUpdatedCompany } from '@controllers/updatedCompany'
import { get as getCachedCompany } from '@controllers/cachedCompany'
import { Router } from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from './swagger.json'
const routes = Router()

routes.get('/company/updated/:cnpj', getUpdatedCompany)
routes.get('/company/cached/:cnpj', getCachedCompany)
routes.get('/', (req, res) =>
  res.status(400).json({
    message: 'Invalid route',
    validRoutes: ['/companies/updated/:cnpj', '/companies/cache/:cnpj'],
  })
)
routes.use('/api-docs', swaggerUi.serve)
routes.get('/api-docs', swaggerUi.setup(swaggerDocument))

routes.get('*', (req, res) => res.redirect('/'))

export default routes
