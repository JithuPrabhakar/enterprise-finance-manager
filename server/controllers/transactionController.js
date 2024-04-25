// transactionController.js
import Transaction from '../models/transactionModel.js'

const addTransaction = async (req, res) => {
  try {
    // Extract data from request body
    const { date, amount, buyer, productIds } = req.body

    // Create a new transaction entry
    const newTransaction = await Transaction.create({
      date,
      amount,
      buyer,
      productIds,
    })

    res.status(201).json(newTransaction)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export { addTransaction }
