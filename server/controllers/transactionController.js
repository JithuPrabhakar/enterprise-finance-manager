// transactionController.js
import Transaction from '../models/transactionModel.js'

const addTransaction = async (req, res) => {
  try {
    const { date, amount, description, type } = req.body

    const newTransaction = await Transaction.create({
      date,
      amount,
      description,
      type,
    })

    res.status(201).json(newTransaction)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export { addTransaction }
