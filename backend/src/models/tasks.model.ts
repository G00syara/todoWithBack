import { Table, Column, Model, DataType, BelongsToMany, PrimaryKey, AutoIncrement  } from 'sequelize-typescript';
import { Categories } from './categories.model.js';
import { TasksCategories } from './tasks_categories.model.js';

@Table({
    timestamps: false,
    tableName: "tasks",
})

export class Tasks extends Model {

    @Column({
        type: DataType.STRING,
        allowNull: false,
      })
      task_name!: string;
      @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      })
      task_checked!: boolean;

      @BelongsToMany(() => Categories, () => TasksCategories)
      categories!: Categories[]
      
}