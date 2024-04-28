import AdminMsg from '../models/adminMsgModel.js'
import StudentFee from '../models/studentFeeModel.js'

const addStudentFee = async (req, res) => {
  try {
    const { name, regNo, graduation, semester, fees, date, department } =
      req.body

    const newStudentFee = await StudentFee.create({
      name,
      regNo,
      graduation,
      semester,
      fees,
      date,
      department,
    })

    res.status(201).json(newStudentFee)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const createAdminMessage = async (req, res) => {
  try {
    const { item, type, message, estimate, approved, department } = req.body
    const newAdminMsg = await AdminMsg.create({
      item,
      type,
      message,
      estimate,
      approved,
      department,
    })
    res.status(201).json(newAdminMsg)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const showAdminMessages = async (req, res) => {
  try {
    const msgs = await AdminMsg.find()
    res.status(201).json(msgs)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getStudentFee = async (req, res) => {
  try {
    const msgs = await StudentFee.find()
    res.status(201).json(msgs)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export { createAdminMessage, addStudentFee, showAdminMessages, getStudentFee }
