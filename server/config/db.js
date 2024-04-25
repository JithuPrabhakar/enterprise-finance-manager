import mongoose from 'mongoose'
import { kpis, products, transactions } from '../data/data.js'

const PORT = process.env.PORT || 9000
const connectDB = () => {
  const conn = mongoose
    .connect(process.env.MONGO_URL)
    .then(async () => {
      // app.listen(PORT, () => console.log(`Server Port: ${PORT}`))
      console.log('MongoDB Connected...')
      /* ADD DATA ONE TIME ONLY OR AS NEEDED */
      await mongoose.connection.db.dropDatabase()
      // KPI.insertMany(kpis)
      // Product.insertMany(products);
      // Transaction.insertMany(transactions);
    })
    .catch((error) => console.log(`${error} did not connect`))
}

export default connectDB
