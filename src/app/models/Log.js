import mongoose from 'mongoose'
const Schema = mongoose.Schema

const LogSchema = Schema({
  thing: {
    type: Schema.Types.ObjectId,
    ref: 'Thing'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  values: [{ key: Schema.Types.Mixed }]
})

export default mongoose.model('Log', LogSchema)
