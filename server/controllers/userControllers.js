import { generateToken } from '../utils/generateToken.js'
import asyncHandler from '../middleware/asyncHandler.js'
import User from '../models/userModel.js'

// @desc    Register a new user
// @route   POST /api/users/login
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, role, department } = req.body

  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  const user = await User.create({
    name,
    email,
    password,
    role,
    department,
  })

  console.log(user)

  if (user) {
    generateToken(res, user._id)
    res.status(201).json(user)
  } else {
    res.status(400)
    throw new Error('Invalid User Data')
  }
})

// @desc    Auth user & get token
// @route   POST /api/users
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id)
    console.log(user)
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      department: user.department,
    })
  } else {
    res.status(401)
    throw new Error('invalid email and password')
  }
})

// @desc    Logout user / clear cookie
// @route   POST /api/users/logout
// @access  Public
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  })

  res.status(200).json({ message: 'Logged Out Successfully' })
})

export { authUser, registerUser, logoutUser }
