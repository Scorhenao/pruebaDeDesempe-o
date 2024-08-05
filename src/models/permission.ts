import {
Table, // Decorador para definir una tabla de la base de datos.
Column, // Decorador para definir una columna de la tabla.
Model, // Clase base para todos los modelos.
DataType, // Tipos de datos de Sequelize.
PrimaryKey, // Decorador para definir una clave primaria.
AutoIncrement, // Decorador para definir una columna con incremento automático.
BelongsTo,
ForeignKey,
} from "sequelize-typescript";
import { Role } from './role';
import { Entity } from "./entity";


@Table({
    tableName: "permissions", // Nombre de la tabla en la base de datos.
    timestamps: true, // Habilita la gestión automática de timestamps (createdAt y updatedAt).
})
export class Permission extends Model {
    // Define la columna 'id' como clave primaria con incremento automático.
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
    })
    id!: number;

    @Column({
        type: DataType.BOOLEAN,
    })
    canCreate!: boolean;

    @Column({
        type: DataType.BOOLEAN,
    })
    canUpdate!: boolean;

    @Column({
        type: DataType.BOOLEAN,
    })
    canDelete!: boolean;

    @Column({
        type: DataType.BOOLEAN,
    })
    canGet!: boolean;


    // Define la columna 'userId' como una clave foránea que referencia al modelo User.
    @ForeignKey(() => Role)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    roleId!: number;

    // Define la columna 'userId' como una clave foránea que referencia al modelo User.
    @ForeignKey(() => Entity)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    entityId!: number;


    // Define la relación de pertenencia al modelo User.
    @BelongsTo(() => Role)
    role!: Role;

    // Define la relación de pertenencia al modelo User.
    @BelongsTo(() => Entity)
    entity!: Entity;

}