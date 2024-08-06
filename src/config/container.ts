import { container } from 'tsyringe';  // Importa el contenedor de inyección de dependencias de la biblioteca tsyringe.
import UserService from '../services/userService';  // Importa el servicio de usuarios.
import UserRepository from '../repositories/userRepository';  // Importa el repositorio de usuarios.
import OrderRepository from '../repositories/orderRepository';
import OrderService from '../services/orderService';
import ProductRepository from '../repositories/productRepository';
import ProductService from '../services/productService';
import CartRepository from '../repositories/cartRepository';
import CartService from '../services/cartService';

container.registerSingleton<UserRepository>(UserRepository);
container.registerSingleton<UserService>(UserService);

container.registerSingleton<OrderRepository>(OrderRepository);
container.registerSingleton<OrderService>(OrderService);

container.registerSingleton<ProductRepository>(ProductRepository);
container.registerSingleton<ProductService>(ProductService);

container.registerSingleton<CartRepository>(CartRepository);
container.registerSingleton<CartService>(CartService);

export default container; // Exporta el contenedor para que pueda ser usado en cualquier parte del código.
