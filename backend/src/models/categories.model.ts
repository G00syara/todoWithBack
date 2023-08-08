import { Table, Column, Model, DataType, BelongsToMany, PrimaryKey  } from 'sequelize-typescript';
import { Tasks } from './tasks.model.js';
import { TasksCategories } from './tasks_categories.model.js';

@Table({
    timestamps: false,
    tableName: "categories",
})
export class Categories extends Model {
    @BelongsToMany(() => Tasks, () => TasksCategories)
    categories!: Tasks[]

    @Column({
        type: DataType.STRING,
        allowNull: false,
      })
      categories_name!: string;
}
