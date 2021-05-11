import mongoose from 'mongoose'

const url = `mongodb+srv://combate:combate@cluster0.5gdtx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false })
