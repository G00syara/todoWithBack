import { createCategory, deletedCategory, getAllCategory } from '../controller/categories.controller.sequelize.js';
import { Router } from 'express';
import {
  addCategoryToTask,
  createTask,
  deleteTask,
  getAllTask,
  removeCategoryFromTask,
  updateTask,
} from '../controller/task.controller.sequelize.js';

export const router = Router();

router.post('/task', createTask);
router.get('/task', getAllTask);
router.put('/task/:id', updateTask);
router.delete('/task/:id', deleteTask);
router.post('/task/:id/categories/:categoryId', addCategoryToTask);
router.delete('/task/:id/categories/:categoryId', removeCategoryFromTask);

router.get('/categories', getAllCategory);
router.post('/categories', createCategory);
router.delete('/categories/:id', deletedCategory);
