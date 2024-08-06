import { injectable } from 'tsyringe'; // Importa el decorador @injectable para permitir la inyección de dependencias.
import { User } from '../models/user'; // Importa el modelo User para interactuar con la base de datos.
import { Role } from '../models';
import  Jwt  from 'jsonwebtoken';
import bcrypt from 'bcrypt';

@injectable() // Marca la clase como inyectable, permitiendo que pueda ser inyectada en otros servicios o controladores.
export default class UserRepository {
    id: any;
    role: any;
    // Método para obtener todos los usuarios de la base de datos.
    async findAll() {
        return await User.findAll(); // Utiliza el método findAll de Sequelize para obtener todas las instancias del modelo User.
    }

    // Método para obtener un usuario específico por su ID.
    async findById(id: number): Promise<User |null> {
        if (isNaN(id)) { // Verifica si el id es NaN
            throw new Error('Invalid user ID');
        }
        return await User.findByPk(id); // Utiliza el método findByPk de Sequelize para obtener un usuario por su clave primaria (ID).
    }

    // Método para obtener un usuario específico por su email.
    async findByEmail(email: string) {
        return await User.findOne({ where: { email } });
    }

    // Método para obtener todas las tareas asociadas a un usuario específico.
    async findByUserId(userId: number) {
        return await Role.findAll({ 
            where: { userId }, // Filtra las tareas por el ID del usuario.
            include: User // Incluye el modelo User en la consulta para obtener los datos del usuario asociado.
        });
    }

    // Metodo para entontrar el nombre de la entidad roles segun su id
    async findRoleById(id: number) {
        return await User.findOne({ where: { id } });
    }

    // Metodo para quemar los roles pricipales los roles admin y client en la entidad roles 
    async createRoles() {
        return await Role.bulkCreate([
            { userId: 1, name: 'admin' },
            { userId: 2, name: 'client' }
        ]);
    }

    // Método para crear un nuevo usuario siempre como client que en la tabla roles es 2.
    async create(email: string, password: string) {
        //encryptar contraseña
        const hashedPassword = await bcrypt.hash(password, 10);
        return await User.create({ email, password: hashedPassword, roleId: 2 });
    }


    // Método para actualizar un usuario existente por su ID.
    async update(id: number, updates: Partial<{ name: string, email: string, password: string, role: 'admin' | 'client' }>) {
        const user = await User.findByPk(id); // Encuentra el usuario por su ID.
        if (user) {
            return await user.update(updates); // Actualiza los campos del usuario y guarda los cambios en la base de datos.
        }
        return null; // Devuelve null si el usuario no se encuentra.
    }

    // generate token
    // only refers to a type, but is being used as a value here problem .
    generateToken() {
        return Jwt.sign({ id: this.id, role: this.role },'secret_key', { expiresIn: '1h' });
    }

    // Método para iniciar sesion con un usuario existente por su correo y contraseña.
    async login(email: string, password: string) {
        const user = await User.findOne({ where: { email } });
        if (user && await user.validatePassword(password)) {
            return { token: user.generateToken() };
        }
        return null;
    }
}
