//this is the API
import express from 'express'
import cors from 'cors'
import logger from 'morgan'

import db from './db/connection.js'
import routes from './routes/index.js'

const app = express()

const PORT = process.env.PORT || 3000

//middleware i.e. third party plugins for the express framework
app.use(express.json())  //express's json parser
app.use(logger('dev')) // adds logging capability, keeps track of requests and what path they took
app.use(cors())

app.use('/api', routes) // use express router

db.on('connected', () => {
  console.log('Connected to MONGODB!')
  app.listen(PORT, () =>
    console.log("Express server running on Port", PORT))

})

