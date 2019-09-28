import dotenv from 'dotenv'
dotenv.config()

export default {
  uri: process.env.DB_URL || "mongodb://127.0.0.1:27017/test",
  opt: { useNewUrlParser: true, useCreateIndex: true }
}
