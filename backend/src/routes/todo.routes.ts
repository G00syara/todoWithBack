import { Router } from 'express'
import {
  createTodo,
  deleteTodo,
  getOneTodo,
  getTodo,
  updateTodo,
} from '../controller/todo.controller.js'

export const router = Router()

router.post('/todo', createTodo)
router.get('/todo', getTodo)
router.get('/todo/:id', getOneTodo)
router.put('/todo', updateTodo)
router.delete('/todo/:id', deleteTodo)
