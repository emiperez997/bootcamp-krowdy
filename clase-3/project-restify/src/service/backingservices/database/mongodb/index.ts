import mongoose from 'mongoose'

const {
  CREDENTIALS_BACKING_DB_MONGO_URI = 'mongodb://localhost:27017/test' 
  // CREDENTIALS_BACKING_DB_MONGOUSERS_URI = 'mongodb://localhost:27017/test' 
  // CREDENTIALS_BACKING_DB_MONGOPROFILE_URI = 'mongodb://localhost:27017/test' 
  // CREDENTIALS_BACKING_DB_MONGOVIDEOS_URI = 'mongodb://localhost:27017/test' 
} = process.env

// const bootcampDB = mongoose.createConnection(CREDENTIALS_BACKING_DB_MONGO_URI)
// const usersDB = mongoose.createConnection(CREDENTIALS_BACKING_DB_MONGO_URI)
// const profileDB = mongoose.createConnection(CREDENTIALS_BACKING_DB_MONGO_URI)
// const videosDB = mongoose.createConnection(CREDENTIALS_BACKING_DB_MONGO_URI)
const videoDB = mongoose.createConnection(CREDENTIALS_BACKING_DB_MONGO_URI)

export {
  videoDB,
}


