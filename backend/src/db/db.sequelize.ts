import { Sequelize } from "sequelize-typescript";
import 'dotenv/config'

import { Tasks } from "../models/tasks.model";
import { Categories } from "../models/categories.model";
import { TasksCategories } from "../models/tasks_categories.model";

const connection = new Sequelize({
  dialect: "postgres",
    host: "localhost",
    username: "postgres",
    password: "admin",
    database: "todolist", 
  logging: false,
  models: [Tasks, Categories, TasksCategories]
});

export default connection;