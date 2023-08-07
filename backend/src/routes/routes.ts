import { Router } from 'express'
import {
  createTodo,
  deleteTodo,
  getAllTodo,
  updateTodo,
} from '../controller/todo.controller.js'
import {
  createCategory,
  getAllCategory
} from '../controller/categories.controller.js'

export const router = Router()

router.post('/task', createTodo)
router.get('/task', getAllTodo)
router.put('/task', updateTodo)
router.delete('/task/:id', deleteTodo)

router.post('/categories', createCategory)
router.get('/categories', getAllCategory)
