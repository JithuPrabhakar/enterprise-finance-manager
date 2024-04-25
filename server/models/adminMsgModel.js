import mongoose from 'mongoose'

const Schema = mongoose.Schema

const adminMessageSchema = new Schema(
  {
    item: String,
    type: String,
    message: String,
    estimate: Number,
    department: { type: Schema.Types.ObjectId, ref: 'Department' },
    approved: { type: Boolean, default: false },
  },
  { timestamps: true }
)

const AdminMessage = mongoose.model('AdminMessage', adminMessageSchema)

export default AdminMessage
