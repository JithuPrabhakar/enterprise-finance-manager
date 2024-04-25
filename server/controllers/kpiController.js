// kpiController.js
import KPI from '../models/kpiModel.js'

const addDailyKPI = async (req, res) => {
  try {
    // Extract data from request body
    const { date, income, expenses } = req.body

    // Create a new daily KPI entry
    const newDailyKPI = await KPI.create({
      date,
      income,
      expenses,
    })

    res.status(201).json(newDailyKPI)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export { addDailyKPI }
