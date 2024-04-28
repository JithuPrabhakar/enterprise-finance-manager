import express from 'express'
import {
  createAdminMessage,
  addStudentFee,
  showAdminMessages,
} from '../controllers/departmentController.js'

const router = express.Router()

router.get('/adminMsg', showAdminMessages)
router.post('/adminMsg', createAdminMessage)
router.post('/studentFee', addStudentFee)

export default router
