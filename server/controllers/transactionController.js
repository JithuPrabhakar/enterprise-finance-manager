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

const getTransaction = async (req, res) => {
  try {
    const transactions = await Transaction.find()

    res.status(201).json(transactions)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export { addTransaction, getTransaction }
