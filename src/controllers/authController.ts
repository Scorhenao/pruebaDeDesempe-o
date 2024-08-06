import { Request, Response } from 'express'; // Importa las interfaces Request y Response de Express para manejar solicitudes y respuestas HTTP.
import { container } from 'tsyringe'; // Importa el contenedor de inyección de dependencias de tsyringe.
import UserService from '../services/userService'; // Importa el servicio de usuarios para gestionar operaciones relacionadas con usuarios.
import jwt from 'jsonwebtoken'; // Importa la biblioteca jsonwebtoken para generar y verificar tokens JWT.

const SECRET_KEY = 'your_secret_key'; // Define una clave secreta para firmar los tokens JWT. (Cambiar por una clave segura y secreta en producción.)

export default class AuthController {
    // Método estático para registrar un nuevo usuario.
    static async register(req: Request, res: Response) {
        const { email, password } = req.body;

        const userService = container.resolve(UserService);
        const user = await userService.createUser(email, password);

        res.json(user);
    }

    // Método estático para iniciar sesión.
    static async login(req: Request, res: Response) {
        const { email, password } = req.body;
    
        const userService = container.resolve(UserService);
        const user = await userService.getUserByEmail(email);
    
        if (!user || !(await user.validatePassword(password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
    
        const token = jwt.sign({ id: user.id, role: user.role }, SECRET_KEY, { expiresIn: '1h' });
        res.json({ token });
    }
}