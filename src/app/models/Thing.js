import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
const Schema = mongoose.Schema

const ThingSchema = Schema({
  name: {
    type: String,
    trim: true,
    unique: true,
    required: true,
    lowercase: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  token: String
})

ThingSchema.post('validate', (doc, next) => {
  try {
    let _id = String(doc._id)
    doc.token = jwt.sign({ _id }, process.env.SECRET)
  } catch (error) {
    console.log(error)
  }
  next()
})

export default mongoose.model('Thing', ThingSchema)
