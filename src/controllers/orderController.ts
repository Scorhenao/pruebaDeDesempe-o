import { Request, Response } from 'express'; // Importa las interfaces Request y Response de Express.
import { container } from 'tsyringe'; // Importa el contenedor de inyección de dependencias de tsyringe.
import OrderService from '../services/orderService'; // Importa el servicio de tareas.

export default class OrderController {
    // Método estático para obtener todas las tareas.
    static async getAllOrders(req: Request, res: Response) {
        const orderService = container.resolve(OrderService); // Resuelve una instancia de TaskService desde el contenedor.
        const orders = await orderService.getAllOrders(); // Llama al método getAllTasks del servicio de tareas.
        res.json(orders); // Envía la lista de tareas como respuesta en formato JSON.
    }

    // Método estático para obtener una tarea por su ID.
    static async getOrderById(req: Request, res: Response) {
        const orderService = container.resolve(OrderService); // Resuelve una instancia de TaskService desde el contenedor.
        const order = await orderService.getOrdersById(parseInt(req.params.id)); // Llama al método getTaskById del servicio de tareas, pasando el ID de la tarea como parámetro.
        res.json(order); // Envía la tarea encontrada como respuesta en formato JSON.
    }

    // Método estático para obtener tareas por el ID de usuario.
    static async getOrdersByUserId(req: Request, res: Response) {
        const orderService = container.resolve(OrderService); // Resuelve una instancia de TaskService desde el contenedor.
        const orders = await orderService.getOrdersByUserId(parseInt(req.params.userId)); // Llama al método getTasksByUserId del servicio de tareas, pasando el ID de usuario como parámetro.
        res.json(orders); // Envía la lista de tareas encontradas como respuesta en formato JSON.
    }

    // Método estático para crear una nueva tarea.
    static async createOrder(req: Request, res: Response) {
        const orderService = container.resolve(OrderService); // Resuelve una instancia de TaskService desde el contenedor.
        const order = await orderService.createOrder(req.body); // Llama al método createTask del servicio de tareas, pasando los datos de la nueva tarea como parámetro.
        
        // Comenta las siguientes líneas para depurar los datos de la tarea en formato JSON.
        // const dataTask = req.body
        // const dataTaskObject = JSON.stringify(dataTask)
        // console.log(dataTaskObject);

        res.status(201).json(order); // Envía la tarea creada como respuesta en formato JSON, con el código de estado 201 (Created).
    }

    // Método estático para actualizar una tarea existente.    
    static async updateOrder(req:Request, res:Response){
        const orderService = container.resolve(OrderService);
        const order = await orderService.updateOrder(req.body);
        res.status(200).json(order);
    }

    // Método estático para eliminar una tarea existente.
    static async deleteOrder(req: Request, res: Response) {
        const orderService = container.resolve(OrderService);
        const order = await orderService.deleteOrder(parseInt(req.params.id));
    
        if (!order) {
            return res.status(404).json({ message: 'Task not found' });
        }
    
        res.status(204).send(); // 204 NOT content
    }
}
