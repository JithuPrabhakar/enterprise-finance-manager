// studentFeeRoutes.js
import express from 'express'
import { addStudentFee } from '../controllers/studentFeeController.js'

const router = express.Router()

router.post('/studentFee', addStudentFee)

export default router
