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

const editTransaction = async (req, res) => {
  try {
    const data = req.body
    const transaction = await Transaction.findByIdAndUpdate(
      { _id: data.id },
      { amount: data.amount }
    )

    res.status(201).json(transaction)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const deleteTransaction = async (req, res) => {
  try {
    const { id } = req.params
    const transaction = await Transaction.findByIdAndDelete({ _id: id })

    res.status(201).json(transaction)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export { addTransaction, getTransaction, editTransaction, deleteTransaction }
