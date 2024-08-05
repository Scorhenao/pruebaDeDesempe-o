import {
Table, // Decorador para definir una tabla de la base de datos.
Column, // Decorador para definir una columna de la tabla.
Model, // Clase base para todos los modelos.
DataType, // Tipos de datos de Sequelize.
PrimaryKey, // Decorador para definir una clave primaria.
AutoIncrement, // Decorador para definir una columna con incremento automático.
BelongsTo,
ForeignKey,
HasMany
} from "sequelize-typescript";
import { User } from './user';
import { ProductCart } from "./productCart";


@Table({
    tableName: "carts", // Nombre de la tabla en la base de datos.
    timestamps: true, // Habilita la gestión automática de timestamps (createdAt y updatedAt).
})
export class Cart extends Model {
    // Define la columna 'id' como clave primaria con incremento automático.
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
    })
    id!: number;

    // Define la columna 'userId' como una clave foránea que referencia al modelo User.
    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    userId!: number;

    // Define la relación de pertenencia al modelo User.
    @BelongsTo(() => User)
    user!: User;

    @HasMany(() => ProductCart)
    productCart!: ProductCart[];

}