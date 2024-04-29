// transactionRoutes.js
import express from 'express'
import {
  addTransaction,
  getTransaction,
  editTransaction,
  deleteTransaction,
} from '../controllers/transactionController.js'

const router = express.Router()

router.post('/transaction', addTransaction)
router.get('/transaction', getTransaction)
router.patch('/transaction', editTransaction)
router.delete('/transaction/:id', deleteTransaction)

export default router
