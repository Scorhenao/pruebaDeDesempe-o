import OrderRepository from '../repositories/orderRepository'; // Importa el repositorio de tareas que maneja las operaciones con la base de datos.
import { CreationAttributes } from 'sequelize'; // Importa el tipo CreationAttributes de Sequelize, que define los atributos para crear un nuevo registro.
import { injectable, inject } from 'tsyringe'; // Importa decorators para inyección de dependencias.
import { Order } from '../models'; // Importa el modelo de tarea.

@injectable() // Marca esta clase como un servicio que puede ser inyectado en otros lugares mediante 'tsyringe'.
export default class TaskService {
    constructor(
        @inject(OrderRepository) private orderRepository: OrderRepository // Inyecta una instancia de TaskRepository en el constructor.
    ) {}

    // Método para obtener todas las tareas.
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
