import express from 'express'
const router = express.Router()

import auth from '../middlewares/auth.js'
import AuthController from '../controllers/AuthController.js'

router.post('/login', AuthController.login)
router.post('/register', AuthController.register)
router.post('/logout', auth(['user']), AuthController.logout)
router.post('/profile', auth(['user']), AuthController.profile)

export default router
