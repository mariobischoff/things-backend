import mongoose from 'mongoose'
const Schema = mongoose.Schema

const UserSchema = Schema({
  email: {
    type: String,
    trim: true,
    unique: true,
    required: true,
    lowercase: true
  },
  hash_password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  things: [
    {
      type: Schema.Types.ObjectId,
      ref: 'thing'
    }
  ]
})

export default mongoose.model('User', UserSchema)
