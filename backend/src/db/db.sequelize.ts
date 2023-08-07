import { Sequelize } from "sequelize-typescript";
import 'dotenv/config'

import { Tasks } from "../models/tasks.model.js";
// import { Categories } from "../models/categories.model.js";
// import { TasksCategories } from "../models/tasks_categories.model.js";

//Переделать на env
export const connection = new Sequelize({
  dialect: "postgres",
    host: "localhost",
    username: "postgres",
    password: "admin",
    database: "todolist", 
  logging: false,
//   models: [Tasks, Categories, TasksCategories]
  models: [Tasks]

});

