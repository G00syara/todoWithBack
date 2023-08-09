import { Categories } from '../models/categories.model.js';
import { NextFunction, RequestHandler } from 'express';

export const createCategory: RequestHandler = async (req: any, res: any, next: NextFunction) => {
  try {
    const categories = await Categories.create({ ...req.body });
    res.json({ message: 'makes cool', data: categories });
  } catch (error) {
    next(error);
    res.status(400).json({ msg: 'Create Task error' });
  }
};
