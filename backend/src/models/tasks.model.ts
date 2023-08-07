import { Table, Column, Model, DataType  } from 'sequelize-typescript';

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
        allowNull: true,
        defaultValue: false,
      })
      task_checked!: boolean;
}
