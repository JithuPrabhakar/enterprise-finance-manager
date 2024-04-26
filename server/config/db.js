import mongoose from 'mongoose'
import { kpis } from '../data/data.js'
import KPI from '../models/kpiModel.js'

const PORT = process.env.PORT || 9000
const connectDB = () => {
  const conn = mongoose
    .connect(process.env.MONGO_URL)
    .then(async () => {
      console.log('MongoDB Connected...')
    })
    .catch((error) => console.log(`${error} did not connect`))
}

export default connectDB

// Assuming you want to save this data in the database
// const saveDemoKPIData = async () => {
//   try {
//     const kpi = new KPI(kpis)
//     await kpi.save()
//     console.log('Demo KPI data saved successfully!')
//   } catch (error) {
//     console.error('Error saving demo KPI data:', error)
//   }
// }

// saveDemoKPIData()
