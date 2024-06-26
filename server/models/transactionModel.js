import mongoose from 'mongoose'

const Schema = mongoose.Schema

const transactionSchema = new Schema(
  {
    date: { type: Date, required: true },
    description: { type: String, required: true },
    amount: { type: Number, required: true },
    type: { type: String, enum: ['debit', 'credit'], required: true },
  },
  { timestamps: true }
)

const Transaction = mongoose.model('Transaction', transactionSchema)

export default Transaction
