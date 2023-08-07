import { Table, Column, Model, DataType  } from 'sequelize-typescript';

@Table({
    timestamps: false,
    tableName: "tasks_categories",
})
export class TasksCategories extends Model {
    @Column({
        type: DataType.NUMBER,
        allowNull: false,
        primaryKey: true,

      })
      id!: number
    @Column({
        type: DataType.NUMBER,
        allowNull: false,
      })
      task_id!: number;
      @Column({
        type: DataType.STRING,
        allowNull: false,
      })
      categories_id!: number;
}
