import { createCategory } from '../controller/categories.controller.sequelize.js'
import { Router } from 'express'
import {
  createTask,
  deleteTask,
  getAllTask,
  updateTask,
} from '../controller/task.controller.sequelize.js'

export const router = Router()

router.post('/task', createTask)
router.get('/task', getAllTask)
router.put('/task/:id', updateTask)
router.delete('/task/:id', deleteTask)

router.post('/categories', createCategory)
