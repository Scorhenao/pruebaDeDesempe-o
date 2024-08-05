import { Router } from 'express'; 
import OrderController from '../controllers/orderController'; 

export const orderRouter = Router(); 
orderRouter.get('/', OrderController.getAllOrders);


orderRouter.get('/:id', OrderController.getOrderById);

orderRouter.get('/user/:userId', OrderController.getOrdersByUserId);

orderRouter.post('/', OrderController.createOrder);

orderRouter.put('/',OrderController.updateOrder);

orderRouter.delete('/:id', OrderController.deleteOrder);
