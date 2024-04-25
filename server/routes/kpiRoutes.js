// kpiRoutes.js
import express from 'express'
import { addDailyKPI } from '../controllers/kpiController.js'

const router = express.Router()

router.post('/kpi', addDailyKPI)

export default router
