import { NextFunction, RequestHandler } from 'express'
import { pool as db } from '../db/db.js'

export const createCategory:RequestHandler = async (req: any, res: any, next: NextFunction) => {
  try {
    const { categories_name } = req.body
    const newCategory = await db.query(
      `INSERT INTO categories (categories_name) values ($1) RETURNING *`,
      [categories_name]
    )
    res.json(newCategory.rows[0])
  } catch (error) {
    next(error);
    res.status(400).json({ msg: 'Create category error' })  }
}

export const getAllCategory:RequestHandler = async (req: any, res: any, next: NextFunction) => {
  try {
    const categories = await db.query(`SELECT * FROM categories`)
    res.json(categories.rows)
  } catch (error) {
    next(error)
    res.status(400).json({ msg: 'Delete category error' })  }
}