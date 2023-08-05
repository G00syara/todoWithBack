import { pool as db } from '../db/db.js'

export const createTodo: any = async (req: any, res: any) => {
  const { task_name, task_checked } = req.body
  const newTodo = await db.query(
    `INSERT INTO tasks (task_name, task_checked) values ($1, $2) RETURNING *`,
    [task_name, task_checked]
  )
  res.json(newTodo.rows[0])
}

export const getTodo: any = async (req: any, res: any) => {
  const tasks = await db.query(`SELECT * FROM tasks`)
  res.json(tasks.rows)
}
export const getOneTodo = async (req: any, res: any) => {
  const id = req.params.id
  const task = await db.query(`SELECT * FROM tasks where id = $1`, [id])
  res.json(task.rows[0])
}
export const updateTodo = async (req: any, res: any) => {
  const { id, task_name, task_checked } = req.body
  const task = await db.query(
    `UPDATE tasks set task_name = $1, task_checked = $2 where id = $3 RETURNING *`,
    [task_name, task_checked, id]
  )
  res.json(task.rows[0])
}
export const deleteTodo = async (req: any, res: any) => {
  const id = req.params.id
  const task = await db.query(`DELETE from tasks where id = $1`, [id])
  res.json(task.rows[0])
}
