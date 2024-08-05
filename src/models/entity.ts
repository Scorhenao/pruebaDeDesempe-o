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
import { Permission } from './permission';



@Table({
    tableName: "entities", // Nombre de la tabla en la base de datos.
    timestamps: true, // Habilita la gestión automática de timestamps (createdAt y updatedAt).
})
export class Entity extends Model {
    // Define la columna 'id' como clave primaria con incremento automático.
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
    })
    id!: number;

    @Column({
        type: DataType.STRING,
    })
    name!: string;

    @HasMany(() => Permission)
    permission!: Permission[];
}