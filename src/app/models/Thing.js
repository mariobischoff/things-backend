import mongoose from 'mongoose'
const Schema = mongoose.Schema

const ThingSchema = Schema({
  name: {
    type: String,
    trim: true,
    unique: true,
    required: true,
    lowercase: true
  },
})

export default mongoose.model('Thing', ThingSchema)
