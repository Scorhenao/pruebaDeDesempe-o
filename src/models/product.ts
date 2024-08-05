import {
    Table, // Decorador para definir una tabla de la base de datos.
    Column, // Decorador para definir una columna de la tabla.
    Model, // Clase base para todos los modelos.
    DataType, // Tipos de datos de Sequelize.
    PrimaryKey, // Decorador para definir una clave primaria.
    AutoIncrement, // Decorador para definir una columna con incremento automático.
    HasMany
} from "sequelize-typescript";
import { DecimalDataType } from "sequelize";
import { ProductCart } from "./productCart";

@Table({
    tableName: "products", // Nombre de la tabla en la base de datos.
    timestamps: true, // Habilita la gestión automática de timestamps (createdAt y updatedAt).
})
export class Product extends Model {
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

    // Define la columna 'password' con tipo STRING que no puede ser nula y debe ser única.
    @Column({
        type: DataType.DECIMAL(10,2),
        allowNull: false,
        unique: true,
    })
    price!: DecimalDataType;
    

    @Column({
        type: DataType.TEXT,
        allowNull: false,
        unique: true,
    })
    description!: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        unique: true,
    })
    stock!: number;

    @HasMany(() => ProductCart)
    productCart!: ProductCart[];
    
}