import { Sequelize } from "sequelize-typescript";
import 'dotenv/config'

import { Tasks } from "../models/tasks.model.js";
import { TasksCategories } from "../models/tasks_categories.model.js";
import { Categories } from "../models/categories.model.js";

export const connection = new Sequelize({
    dialect: 'postgres',
    host: process.env.POSTGRESS_HOST,
    username: process.env.POSTGRESS_USER,
    password: process.env.POSTGRESS_PASSWORD,
    database: process.env.POSTGRESS_DATABASE, 
    logging: false,
    models: [Tasks, TasksCategories, Categories]

});

