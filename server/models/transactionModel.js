import mongoose from 'mongoose'

const Schema = mongoose.Schema

const transactionSchema = new Schema(
  {
    date: Date,
    description: String,
    amount: Number,
    type: { type: String, enum: ['debit', 'credit'] },
    department: { type: Schema.Types.ObjectId, ref: 'Department' },
  },
  { timestamps: true }
)

const Transaction = mongoose.model('Transaction', transactionSchema)

export default Transaction
