import express from 'express'
const router = express.Router()

import auth from '../middlewares/auth.js'
import TaskController from '../controllers/TaskController.js'

router.get('/', TaskController.index)
router.get('/:id', TaskController.show)
router.post('/', TaskController.store)
router.put('/:id', TaskController.update)
router.delete('/:id', TaskController.destroy)

export default router
