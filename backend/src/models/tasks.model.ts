import { Table, Column, Model, DataType, BelongsToMany, PrimaryKey  } from 'sequelize-typescript';
import { Categories } from './categories.model.js';
import { TasksCategories } from './tasks_categories.model.js';

@Table({
    timestamps: false,
    tableName: "tasks",
})

export class Tasks extends Model {
    @BelongsToMany(() => Categories, () => TasksCategories)
    categories!: Categories[]
    
    @Column({
        onDelete: 'Cascade',
        onUpdate: 'Cascade',
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
}