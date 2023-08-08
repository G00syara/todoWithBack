
import { Table, Column, Model, DataType, ForeignKey, HasMany  } from 'sequelize-typescript';
import { Categories } from './categories.model.js';
import { Tasks } from './tasks.model.js';

@Table({
    timestamps: false,
    tableName: "tasks_categories",
})
export class TasksCategories extends Model {
    @ForeignKey(() => Tasks)
    @Column({
        type: DataType.NUMBER,
        allowNull: false,
        field: 'task_id'
      })
      fkTaskId!: number;
      
      @ForeignKey(() => Categories)
      @Column({
        type: DataType.NUMBER,
        allowNull: false,
        field: 'categories_id'
      })
      fkCategoriesId!: number;
}

