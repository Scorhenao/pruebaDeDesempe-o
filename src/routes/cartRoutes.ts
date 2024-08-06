import { Router } from 'express'; 
import CartController from '../controllers/cartController'; 

export const cartRouter = Router(); 
cartRouter.post('/', CartController.addToCart);
cartRouter.delete('/:id', CartController.deleteOrder);
cartRouter.put('/:id',CartController.updateCart);
