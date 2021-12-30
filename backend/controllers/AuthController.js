import User from '../models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

async function login(req, res) {
  const { email, password } = req.body

  const user = await User.findOne({ email })
  if (!user) {
    return res.status(400).json({ error: 'User not found' })
  }

  const isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' })
  }

  const token = jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRY })

  return res.status(200).json({
    message: 'Login successful',
    token,
  })
}

async function register(req, res) {
  try {
    req.body.password = await bcrypt.hash(req.body.password, await bcrypt.genSalt(10))
    req.body.role = 'user'

    const user = await User.create(req.body)
    res.send(user)
  } catch (error) {
    res.status(400).send(error)
  }
}

async function logout(req, res) {
  res.status(400).json('logout')
}

async function profile(req, res) {
  res.status(200).json({ user: req.user })
}

export default {
  login,
  register,
  logout,
  profile,
}
