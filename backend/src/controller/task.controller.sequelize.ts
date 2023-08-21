import { Tasks } from '../models/tasks.model.js';
import { NextFunction, Request, RequestHandler, Response } from 'express';
import { Categories } from '../models/categories.model.js';

export const createTask: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tasks = await Tasks.create({
      ...req.body,
    });

    res.json({ data: tasks });
  } catch (error) {
    next(error);
    res.status(400).json({ msg: 'Create Task error ' + error });
  }
};

export const getAllTask: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const allTasks: Tasks[] = await Tasks.findAll({ include: { model: Categories } });
    res.json({ data: allTasks });
  } catch (error) {
    next(error);
    res.status(400).json({ msg: 'Get all Task error ' + error });
  }
};

export const updateTask: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).json({ error: 'Task not found' });
    }
    await Tasks.update({ ...req.body }, { where: { id } });
    const tasks: Tasks | null = await Tasks.findByPk(id, {
      include: { model: Categories, attributes: ['categories_name'] },
    });
    res.json({ data: tasks });
  } catch (error) {
    next(error);
    res.status(400).json({ msg: 'Update Task error ' + error });
  }
};

export const deleteTask: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const deletedTask: Tasks | null = await Tasks.findByPk(id);
    if (!deletedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }

    await Tasks.destroy({ where: { id } });

    res.json({ data: deletedTask });
  } catch (error) {
    next(error);
    res.status(400).json({ msg: 'Delete Task error ' + error });
  }
};

export const removeCategoryFromTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const taskId = req.params.id;
    const categoryId = req.params.categoryId;
    const task = await Tasks.findByPk(taskId);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    const categoryToRemove = await Categories.findByPk(categoryId);

    if (!categoryToRemove) {
      return res.status(404).json({ error: 'Category not found' });
    }

    await task.removeCategory(categoryToRemove);

    res.status(200).json({ data: task, categoryToRemove });
  } catch (error) {
    next(error);
    res.status(400).json({ error: 'Delete Category from Task error ' + error });
  }
};
export const addCategoryToTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const taskId = req.params.id;
    const categoryId = req.params.categoryId;
    const task = await Tasks.findByPk(taskId);

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    const categoryToAdd = await Categories.findByPk(categoryId);

    if (!categoryToAdd) {
      return res.status(404).json({ error: 'Category not found' });
    }

    await task.addCategory(categoryToAdd);

    res.status(200).json({ data: task, categoryToAdd });
  } catch (error) {
    next(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
