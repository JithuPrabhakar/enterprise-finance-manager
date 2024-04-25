// studentFeeController.js
import StudentFee from '../models/studentFeeModel.js'

const addStudentFee = async (req, res) => {
  try {
    // Extract data from request body
    const { name, regNo, graduation, semester, fees, date } = req.body

    // Create a new student fee entry
    const newStudentFee = await StudentFee.create({
      name,
      regNo,
      graduation,
      semester,
      fees,
      date,
    })

    res.status(201).json(newStudentFee)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export { addStudentFee }
