import axios from 'axios'

const AUTH_TOKEN = 'Token 8a5feec9252a2ce7b163da146bd94228e2cce427'

const baseURL = 'https://api.brasil.io/v1/dataset/socios-brasil/socios/data'

axios.defaults.headers.common['Authorization'] = AUTH_TOKEN

export const apiPartners = axios.create({
  baseURL,
})
