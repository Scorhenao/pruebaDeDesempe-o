import { Request, Response } from 'express'; // Importa las interfaces Request y Response de Express.
import { container } from 'tsyringe'; // Importa el contenedor de inyección de dependencias de tsyringe.
import CartService from '../services/cartService'; // Importa el servicio de tareas.

export default class CartController {
    // Metodo estatico para agregar un producto de la entidad products a cart 
    static async addToCart(req: Request, res: Response) {
        const cartService = container.resolve(CartService);
        const cart = await cartService.addToCart(req.body);
        res.json(cart);
    }

    // Método estático para actualizar una carrito de compras.    
    static async updateCart(req:Request, res:Response){
        const cartService = container.resolve(CartService);
        const cart = await cartService.updateCart(req.body);
        res.status(200).json(cart);
    }

    // Método estático para eliminar producto de carrito de compras.
    static async deleteOrder(req: Request, res: Response) {
        const cartService = container.resolve(CartService);
        const cart = await cartService.deleteOrder(parseInt(req.params.id));
    
        if (!cart) {
            return res.status(404).json({ message: 'Task not found' });
        }
    
        res.status(204).send(); // 204 NOT content
    }

}
