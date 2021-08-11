import mongoose from 'mongoose'

let MONGODB_URI =
  process.env.PROD_MONGODB ||
  'mongodb://127.0.0.1:27017/postsMongoDatabase'

  // mongoose.set('useCreateIndex', true)
  
mongoose.set('returnOriginal', false)

// setup connection for Mongo DB
mongoose.connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .catch((error) => console.error('Error connecting to MONGODB:', error.message))
 

//Listen for MongoDB events
mongoose.connection.on('disconnected', () => console.log("Disconnected from MONGODB!"))

//Listen to any errors while connected to MongoDB
mongoose.connection.on('error', (error) => console.error(`MONGODB connection error: ${error}`))

//export the mongoose connection to the database
export default mongoose.connection