import mongoose from 'mongoose'
const { Schema } = mongoose

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    default: 'regular',
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  deletedAt: {
    type: Date,
    default: null,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
})

export default mongoose.model('Recipe', taskSchema)
