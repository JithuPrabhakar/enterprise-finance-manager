import mongoose from 'mongoose'

const Schema = mongoose.Schema

const studentFeeSchema = new Schema(
  {
    name: { type: String, required: true },
    regNo: { type: String, required: true },
    graduation: { type: String, required: true },
    semester: { type: String, required: true },
    fees: { type: Number, required: true },
    date: { type: Date, required: true },
    department: { type: String, required: true },
  },
  { timestamps: true }
)

const StudentFee = mongoose.model('StudentFee', studentFeeSchema)

export default StudentFee
