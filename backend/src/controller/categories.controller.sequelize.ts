import { Categories } from '../models/categories.model.js';
import { NextFunction, Request, RequestHandler, Response } from 'express';

export const createCategory: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const categories = await Categories.create({ ...req.body });
    res.json({ data: categories });
  } catch (error) {
    next(error);
    res.status(400).json({ msg: 'Create Task error' });
  }
};
export const getAllCategory: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const allCategories: Categories[] = await Categories.findAll();
    res.json({ data: allCategories });
  } catch (error) {
    next(error);
    res.status(400).json({ msg: 'Get all Task error' });
  }
};
export const deletedCategory: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const deletedCategories: Categories | null = await Categories.findByPk(id);

    if (!deletedCategories) {
      return res.status(404).json({ error: 'Category not found' });
    }

    await Categories.destroy({ where: { id } });

    res.json({ data: deletedCategories });
  } catch (error) {
    next(error);
    res.status(400).json({ msg: 'Delete Task error ' + error });
  }
};
