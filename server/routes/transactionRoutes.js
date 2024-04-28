// transactionRoutes.js
import express from 'express'
import {
  addTransaction,
  getTransaction,
} from '../controllers/transactionController.js'

const router = express.Router()

router.post('/transaction', addTransaction)
router.get('/transaction', getTransaction)

export default router
