import { Product } from './product';
import {
Table, // Decorador para definir una tabla de la base de datos.
Column, // Decorador para definir una columna de la tabla.
Model, // Clase base para todos los modelos.
DataType, // Tipos de datos de Sequelize.
PrimaryKey, // Decorador para definir una clave primaria.
AutoIncrement, // Decorador para definir una columna con incremento automático.
BelongsTo,
ForeignKey
} from "sequelize-typescript";
import { User } from './user';
import { ProductCart } from './productCart';
import { DecimalDataType } from 'sequelize';


@Table({
    tableName: "orders", // Nombre de la tabla en la base de datos.
    timestamps: true, // Habilita la gestión automática de timestamps (createdAt y updatedAt).
})
export class Order extends Model {
    // Define la columna 'id' como clave primaria con incremento automático.
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
    })
    id!: number;

    @Column({
        type: DataType.DECIMAL(10,2),
    })
    total!: DecimalDataType;

    // Define la columna 'userId' como una clave foránea que referencia al modelo User.
    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    userId!: number;

    // Define la columna 'userId' como una clave foránea que referencia al modelo User.
    @ForeignKey(() => ProductCart)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    productCartId!: number;

    @BelongsTo(() => User)
    user!: User;

    @BelongsTo(() => ProductCart)
    productCart!: ProductCart;
}