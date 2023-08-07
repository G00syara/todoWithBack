import { Table, Column, Model, DataType  } from 'sequelize-typescript';

@Table({
    timestamps: false,
    tableName: "categories",
})
export class Categories extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false,
      })
      categories_name!: string;
}
