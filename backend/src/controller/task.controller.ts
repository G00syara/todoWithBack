import { NextFunction, RequestHandler } from 'express';
import { pool as db } from '../db/db.js';

export const createTask: RequestHandler = async (req: any, res: any, next: NextFunction) => {
  try {
    const { task_name } = req.body;
    const newTask = await db.query(`INSERT INTO tasks (task_name) values ($1) RETURNING *`, [task_name]);
    res.json(newTask.rows[0]);
  } catch (error) {
    next(error);
    res.status(400).json({ msg: 'Create Task error' });
  }
};

export const getAllTask: RequestHandler = async (req: any, res: any, next: NextFunction) => {
  try {
    const tasks = await db.query(`SELECT * FROM tasks`);
    res.json(tasks.rows);
  } catch (error) {
    next(error);
    res.status(400).json({ msg: 'Get all Task error' });
  }
};
export const getAllTaskWithCategories: RequestHandler = async (req: any, res: any, next: NextFunction) => {
  try {
    const tasks = await db.query(
      `SELECT t.*, c.categories_name FROM tasks t inner join categories_tasks ct on t.id = ct.task_id inner join categories c on ct.categories_id = c.id`,
    );
    res.json(tasks.rows);
  } catch (error) {
    next(error);
    res.status(400).json({ msg: 'Get all Task error' });
  }
};
export const updateTask: RequestHandler = async (req: any, res: any, next: NextFunction) => {
  try {
    const { id, task_checked = false, task_name } = req.body;
    const task = await db.query(`UPDATE tasks set task_name = $1, task_checked = $2 where id = $3 RETURNING *`, [
      task_name,
      task_checked,
      id,
    ]);
    res.json(task.rows[0]);
  } catch (error) {
    next(error);
    res.status(400).json({ msg: 'Update Task error' });
  }
};
export const deleteTask: RequestHandler = async (req: any, res: any, next: NextFunction) => {
  try {
    const id = req.params.id;
    const task = await db.query(`DELETE from tasks where id = $1`, [id]);
    res.json(task.rows[0]);
  } catch (error) {
    next(error);
    res.status(400).json({ msg: 'Delete Task error' });
  }
};
