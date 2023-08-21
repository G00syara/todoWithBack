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

const routeTask = '/task';
const routeCategories = '/categories';

router.post(`${routeTask}`, createTask);
router.get(`${routeTask}`, getAllTask);
router.put(`${routeTask}/:id`, updateTask);
router.delete(`${routeTask}/:id`, deleteTask);
router.post(`${routeTask}/:id${routeCategories}/:categoryId`, addCategoryToTask);
router.delete(`${routeTask}/:id${routeCategories}/:categoryId`, removeCategoryFromTask);

router.get(`${routeCategories}`, getAllCategory);
router.post(`${routeCategories}`, createCategory);
router.delete(`${routeCategories}/:id`, deletedCategory);
