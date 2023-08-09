import { Table, Column, Model, DataType, BelongsToMany, PrimaryKey, AutoIncrement } from 'sequelize-typescript';
import { Tasks } from './tasks.model.js';
import { TasksCategories } from './tasks_categories.model.js';

@Table({
  timestamps: false,
  tableName: 'categories',
})
export class Categories extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  categories_name!: string;

  @BelongsToMany(() => Tasks, () => TasksCategories)
  tasks!: Tasks[];
}
