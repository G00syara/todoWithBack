
import { Table, Column, Model, DataType, ForeignKey, PrimaryKey, AutoIncrement  } from 'sequelize-typescript';
import { Categories } from './categories.model.js';
import { Tasks } from './tasks.model.js';

@Table({
    timestamps: false,
    tableName: "categories_tasks",
})
export class TasksCategories extends Model {

      @ForeignKey(() => Tasks)
      @Column({
        type: DataType.NUMBER,
        allowNull: false,
      })
      task_id!: number;
      
      @ForeignKey(() => Categories)
      @Column({

        type: DataType.NUMBER,
        allowNull: false,
      })
      categories_id!: number;
}

