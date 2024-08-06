import { Request, Response } from "express"; // Importa las interfaces Request y Response de Express.
import { container } from "tsyringe"; // Importa el contenedor de inyección de dependencias de tsyringe.
import UserService from "../services/userService"; // Importa el servicio de usuarios.

export default class UserController {
  // Método estático para obtener todos los usuarios.
  static async getAllUsers(_: Request, res: Response) {
    const userService = container.resolve(UserService); // Resuelve una instancia de UserService desde el contenedor.
    const users = await userService.getAllUsers(); // Llama al método getAllUsers del servicio de usuarios.
    res.json(users); // Envía la lista de usuarios como respuesta en formato JSON.
  }

  // Método estático para obtener un usuario por su ID.
  static async getUserById(req: Request, res: Response) {
    const userService = container.resolve(UserService); // Resuelve una instancia de UserService desde el contenedor.
    const user = await userService.getUserById(parseInt(req.params.id)); // Llama al método getUserById del servicio de usuarios, pasando el ID del usuario como parámetro.
    console.log(user); // Imprime el usuario en la consola para depuración.
    res.json(user); // Envía el usuario encontrado como respuesta en formato JSON.
  }

  // Método estático para crear un nuevo usuario
  static async createUser(req: Request, res: Response) {
    const userService = container.resolve(UserService);
    const user = await userService.createUser(req.body.email, req.body.password);
    res.json(user);
  }

  // Metodo estatuco para crear los roles de manera quemada
  static async createRoles(_: Request, res: Response) {
    const userService = container.resolve(UserService);
    const roles = await userService.createRoles();
    res.json(roles);
  }

  // Método estático para iniciar session con token
  static async login(req: Request, res: Response) {
    const userService = container.resolve(UserService);
    const user = await userService.login(req.body.email, req.body.password);
    res.json(user);
  }
}
