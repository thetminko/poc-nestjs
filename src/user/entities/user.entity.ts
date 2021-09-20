import {
  Model,
  AutoIncrement,
  Column,
  DataType,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table
export class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @Column(DataType.STRING(255))
  fullName: string;
}
