import { Tasks } from '../models/tasks.model.js'
import { NextFunction, RequestHandler } from 'express'

export const createTask:RequestHandler = async (req: any, res: any, next: NextFunction) => {
  try {
    const tasks = await Tasks.create({...req.body});
    res.json({message: 'makes cool', data: tasks})
  } catch (error) {
    next(error)
    res.status(400).json({ msg: 'Create Task error' })  }
}

export const getAllTask:RequestHandler = async (req: any, res: any, next: NextFunction) => {  
  try {
    const allTasks: Tasks[] = await Tasks.findAll()
    res.json({message: 'makes cool', data: allTasks})
  } catch (error) {
    next(error)
    res.status(400).json({ msg: 'Get all Task error' })  }
  }
//   export const getAllTaskWithCategories:RequestHandler = async (req: any, res: any, next: NextFunction) => {
//     try {
//     const tasks = await db.query(`SELECT t.*, c.categories_name FROM tasks t inner join categories_tasks ct on t.id = ct.task_id inner join categories c on ct.categories_id = c.id`)
//     res.json(tasks.rows)
//   } catch (error) {
//     next(error)
//     res.status(400).json({ msg: 'Get all Task error' })  }
//   }
export const updateTask:RequestHandler = async (req: any, res: any, next: NextFunction) => {
  try {
    const {id} = req.params;
    await Tasks.update({...req.body}, {where: {id}})
    const tasks:Tasks | null = await Tasks.findByPk(id)
    res.json({data: tasks})
  } catch (error) {
    next(error)
    res.status(400).json({ msg: 'Update Task error' })  }

}

//Сделать каскадное удаление
export const deleteTask:RequestHandler = async (req: any, res: any, next: NextFunction) => {
  
  try {
    const {id} = req.params;    
    const deletedTask: Tasks | null = await Tasks.findByPk(id)

    await Tasks.destroy({where:{id}})

    //Ниже попытка сделать удаление каскадным
    // const user:Tasks | null = await Tasks.findOne({where: {id:}});
  //  await user.destroy();
    res.json({data: deletedTask})
  } catch (error) {
    next(error)
    res.status(400).json({ msg: 'Delete Task error ' + error})  }
  }