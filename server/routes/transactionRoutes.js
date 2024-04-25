// transactionRoutes.js
import express from 'express'
import { addTransaction } from '../controllers/transactionController.js'

const router = express.Router()

router.post('/transaction', addTransaction)

export default router
