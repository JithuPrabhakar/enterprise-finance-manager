import mongoose from 'mongoose'

const Schema = mongoose.Schema

const transactionSchema = new Schema(
  {
    date: String,
    amount: Number,
    isCredit: Boolean, // true for credit, false for debit
  },
  { toJSON: { getters: true } }
)

const KPISchema = new Schema(
  {
    dailyTransactions: [transactionSchema],
    monthlyTransactions: [
      {
        month: String,
        transactions: [transactionSchema],
      },
    ],
    yearlyTransactions: [
      {
        year: Number,
        transactions: [transactionSchema],
      },
    ],
  },
  { timestamps: true, toJSON: { getters: true } }
)

const KPI = mongoose.model('KPI', KPISchema)

export default KPI
