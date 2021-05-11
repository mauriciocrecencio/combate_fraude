import express from 'express'
import 'reflect-metadata'
import rateLimit from 'express-rate-limit'

import './database/connect'
import routes from './routes'

const limiter = rateLimit({
  windowMs: 40000,
  max: 5,
  message: { message: 'Too many requests!!!', status: 429 },
  skipFailedRequests: true,
})

const app = express()

app.use(limiter)
app.use(express.json())
app.use(routes)

app.listen(3000, () => console.log('Server is running!'))
