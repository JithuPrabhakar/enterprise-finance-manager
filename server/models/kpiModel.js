import mongoose from 'mongoose'

const Schema = mongoose.Schema

const daySchema = new Schema(
  {
    date: String,
    revenue: Number,
    expenses: Number,
    income: Number, // Add income field
  },
  { toJSON: { getters: true } }
)

const monthSchema = new Schema(
  {
    month: String,
    revenue: Number,
    expenses: Number,
    income: Number, // Add income field
    operationalExpenses: Number,
    nonOperationalExpenses: Number,
  },
  { toJSON: { getters: true } }
)

const yearSchema = new Schema(
  {
    year: Number,
    revenue: Number,
    expenses: Number,
    income: Number, // Add income field
    operationalExpenses: Number,
    nonOperationalExpenses: Number,
  },
  { toJSON: { getters: true } }
)

const KPISchema = new Schema(
  {
    totalProfit: Number,
    totalRevenue: Number,
    totalExpenses: Number,
    totalIncome: Number, // Add totalIncome field
    expensesByCategory: {
      type: Map,
      of: Number,
    },
    dailyData: [daySchema],
    monthlyData: [monthSchema],
    yearlyData: [yearSchema],
  },
  { timestamps: true, toJSON: { getters: true } }
)

const KPI = mongoose.model('KPI', KPISchema)

export default KPI
