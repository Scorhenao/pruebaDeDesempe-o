import CartRepository from '../repositories/cartRepository'; 
import { CreationAttributes } from 'sequelize';
import { injectable, inject } from 'tsyringe'; 
import { Cart } from '../models'; 

@injectable() 
export default class CartService {
    constructor(
        @inject(CartRepository) private cartRepository: CartRepository // Inyecta una instancia de TaskRepository en el constructor.
    ) {}

    // Metodo para añadir producto al carrito
    async addToCart(cart: CreationAttributes<Cart>) {
        return await this.cartRepository.create(cart); // Llama al método create del repositorio de tareas para crear una nueva tarea.
    }

    // Método para actualizar una producto del carrito
    async updateCart(cart:Cart){
        return await this.cartRepository.update(cart);
    }

    // Método para eliminar producto del carrito.
    async deleteOrder(id: number) {
        return await this.cartRepository.delete(id);
    }

}
