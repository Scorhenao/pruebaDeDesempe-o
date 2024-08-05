import {
Table, // Decorador para definir una tabla de la base de datos.
Column, // Decorador para definir una columna de la tabla.
Model, // Clase base para todos los modelos.
DataType, // Tipos de datos de Sequelize.
PrimaryKey, // Decorador para definir una clave primaria.
AutoIncrement, // Decorador para definir una columna con incremento automático.
HasMany // Decorador para definir una relación de uno a muchos.
} from "sequelize-typescript";
import { User } from './user'; // Importa el modelo Task para establecer relaciones.
import { Permission } from "./permission";


@Table({
tableName: "roles", // Nombre de la tabla en la base de datos.
})
export class Role extends Model {
// Define la columna 'id' como clave primaria con incremento automático.
@PrimaryKey
@AutoIncrement
@Column({
    type: DataType.INTEGER,
})
id!: number;

// Define la columna 'email' con tipo STRING que no puede ser nula y debe ser única.
@Column({
    type: DataType.STRING(200),
    allowNull: false,
    unique: true,
})
name!: string;

// Define la relación de uno a muchos con el modelo Task.
@HasMany(() => User)
user!: User[];

@HasMany(() => Permission)
    permission!: Permission[];
}