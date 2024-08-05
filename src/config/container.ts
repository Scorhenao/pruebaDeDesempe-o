import { container } from 'tsyringe';  // Importa el contenedor de inyección de dependencias de la biblioteca tsyringe.
import UserService from '../services/userService';  // Importa el servicio de usuarios.
import UserRepository from '../repositories/userRepository';  // Importa el repositorio de usuarios.

container.registerSingleton<UserRepository>(UserRepository);
container.registerSingleton<UserService>(UserService);

container.registerSingleton<UserRepository>(UserRepository);
