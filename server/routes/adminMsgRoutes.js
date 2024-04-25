// adminMsgRoutes.js
import express from 'express'
import { createAdminMessage } from '../controllers/adminMsgController.js'

const router = express.Router()

router.post('/adminMsg', createAdminMessage)

export default router
