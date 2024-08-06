import OrderRepository from '../repositories/orderRepository'; 
import { CreationAttributes } from 'sequelize';
import { injectable, inject } from 'tsyringe'; 
import { Order } from '../models'; 

@injectable() 
export default class OrderService {
    constructor(
        @inject(OrderRepository) private orderRepository: OrderRepository // Inyecta una instancia de TaskRepository en el constructor.
    ) {}


    async getAllOrders() {
        return await this.orderRepository.findAll(); // Llama al método findAll del repositorio de tareas para obtener todas las tareas.
    }

    // Método para obtener una tarea específica por su ID.
    async getOrdersById(id: number) {
        return await this.orderRepository.findById(id); // Llama al método findById del repositorio de tareas para obtener una tarea por su ID.
    }

    // Método para obtener todas las tareas asociadas a un usuario específico por su ID.
    async getOrdersByUserId(userId: number) {
        return await this.orderRepository.findByUserId(userId); // Llama al método findByUserId del repositorio de tareas para obtener tareas de un usuario específico.
    }

    // Método para crear una nueva tarea.
    async createOrder(task: CreationAttributes<Order>) {
        return await this.orderRepository.create(task); // Llama al método create del repositorio de tareas para crear una nueva tarea.
    }

    // Método para actualizar una tarea existente.
    async updateOrder(order:Order){
        return await this.orderRepository.update(order);
    }

    // Método para eliminar una tarea existente.
    async deleteOrder(id: number) {
        return await this.orderRepository.delete(id);
    }

}
