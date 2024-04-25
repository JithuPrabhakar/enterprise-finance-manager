import mongoose from 'mongoose'

const Schema = mongoose.Schema

const studentFeeSchema = new Schema(
  {
    name: String,
    regNo: String,
    graduation: String,
    semester: String,
    fees: Number,
    date: Date,
    department: { type: Schema.Types.ObjectId, ref: 'Department' },
  },
  { timestamps: true }
)

const StudentFee = mongoose.model('StudentFee', studentFeeSchema)

export default StudentFee
