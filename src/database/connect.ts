import mongoose from 'mongoose'

const MONGO_HOSTNAME = process.env.MONGO_HOSTNAME || '127.0.0.1'
const MONGO_PORT = process.env.MONGO_PORT || 27017
const MONGO_DB = process.env.MONGO_DB || 'combate_a_fraude'

const cloudMongoDB = `mongodb+srv://combate:combate@cluster0.5gdtx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const localMongoDB = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`

// If you want to use my cloud database, please replace localMongoDB to cloudMongoDB in the next line
mongoose.connect(process.env.CLOUD ? cloudMongoDB : localMongoDB, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
})
