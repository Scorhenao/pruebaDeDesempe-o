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
  import { Role } from './role';
  import bcrypt from 'bcrypt';
  import { Cart } from './cart';
  import { Order } from "./order";
  
  
  @Table({
    tableName: "users", // Nombre de la tabla en la base de datos.
    timestamps: true, // Habilita la gestión automática de timestamps (createdAt y updatedAt).
  })
  export class User extends Model {
    generateToken() {
        throw new Error('Method not implemented.');
    }
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
    email!: string;
  
    // Define la columna 'password' con tipo STRING que no puede ser nula y debe ser única.
    @Column({
        type: DataType.STRING(200),
        allowNull: false,
        unique: true,
    })
    password!: string;
    
    // Define la columna 'userId' como una clave foránea que referencia al modelo User.
    @ForeignKey(() => Role)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    roleId!: number;

    // Define la relación de pertenencia al modelo User.
    @BelongsTo(() => Role)
    role!: Role;

    @HasMany(() => Cart)
    cart!: Cart[];

    @HasMany(() => Order)
    order!: Order[];

    // Método para cifrar la contraseña antes de guardar el usuario
    async setPassword(password: string) {
      const hashedPassword = await bcrypt.hash(password, 10);
      this.password = hashedPassword;
    }
  
    // Método para verificar la contraseña
    async validatePassword(password: string): Promise<boolean> {
        return await bcrypt.compare(password, this.password);
    }
  
  }