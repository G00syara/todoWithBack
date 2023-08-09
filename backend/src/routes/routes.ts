import { Router } from 'express';
import {
  createTask,
  deleteTask,
  getAllTask,
  getAllTaskWithCategories,
  updateTask,
} from '../controller/task.controller.js';
import { createCategory, getAllCategory } from '../controller/categories.controller.js';

export const router = Router();

router.post('/task', createTask);
router.get('/task', getAllTask);
router.put('/task', updateTask);
router.delete('/task/:id', deleteTask);
router.get('/task/categories', getAllTaskWithCategories);

router.post('/categories', createCategory);
router.get('/categories', getAllCategory);
