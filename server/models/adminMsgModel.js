import mongoose from 'mongoose'

const Schema = mongoose.Schema

const adminMessageSchema = new Schema(
  {
    item: { type: String, required: true },
    type: { type: String, required: true },
    message: { type: String, required: true },
    estimate: { type: Number, required: true },
    department: { type: String, required: true },
    approved: { type: Boolean, default: false },
  },
  { timestamps: true }
)

const AdminMessage = mongoose.model('AdminMessage', adminMessageSchema)

export default AdminMessage
