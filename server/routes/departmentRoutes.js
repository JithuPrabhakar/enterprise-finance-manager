import express from 'express'
import {
  createAdminMessage,
  addStudentFee,
  showAdminMessages,
  getStudentFee,
} from '../controllers/departmentController.js'

const router = express.Router()

router.get('/adminMsg', showAdminMessages)
router.post('/adminMsg', createAdminMessage)
router.get('/studentFee', getStudentFee)
router.post('/studentFee', addStudentFee)

export default router
