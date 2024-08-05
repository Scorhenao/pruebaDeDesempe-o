import {
    Table, // Decorador para definir una tabla de la base de datos.
    Column, // Decorador para definir una columna de la tabla.
    Model, // Clase base para todos los modelos.
    DataType, // Tipos de datos de Sequelize.
    PrimaryKey, // Decorador para definir una clave primaria.
    AutoIncrement, // Decorador para definir una columna con incremento automático.
    ForeignKey,
    HasMany,
    BelongsTo
} from "sequelize-typescript";
import { Cart } from './cart';
import { Product } from './product';
import { Order } from "./order";


@Table({
    tableName: "producstCarts", // Nombre de la tabla en la base de datos.
    timestamps: true, // Habilita la gestión automática de timestamps (createdAt y updatedAt).
})
export class ProductCart extends Model {
    // Define la columna 'id' como clave primaria con incremento automático.
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
    })
    id!: number;

    @Column({
        type: DataType.INTEGER,
    })
    quantity!: number;

    // Define la columna 'userId' como una clave foránea que referencia al modelo User.
    @ForeignKey(() => Cart)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    cardId!: number;

    // Define la columna 'userId' como una clave foránea que referencia al modelo User.
    @ForeignKey(() => Product)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    productId!: number;

    @BelongsTo(() => Product)
    product!: Product;

    @BelongsTo(() => Cart)
    cart!: Cart;

    @HasMany(() => Order)
    order!: Order[];

}