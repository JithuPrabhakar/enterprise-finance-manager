import express from 'express'
import {
  createAdminMessage,
  addStudentFee,
  showAdminMessages,
  getStudentFee,
  approveAdminMessage,
} from '../controllers/departmentController.js'

const router = express.Router()

router.get('/adminMsg', showAdminMessages)
router.post('/adminMsg', createAdminMessage)
router.patch('/adminMsg/:id', approveAdminMessage)
router.get('/studentFee', getStudentFee)
router.post('/studentFee', addStudentFee)

export default router
