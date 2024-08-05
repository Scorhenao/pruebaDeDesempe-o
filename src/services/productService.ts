import ProductRepository from '../repositories/productRepository'; // Importa el repositorio de tareas que maneja las operaciones con la base de datos.
import { CreationAttributes } from 'sequelize'; // Importa el tipo CreationAttributes de Sequelize, que define los atributos para crear un nuevo registro.
import { injectable, inject } from 'tsyringe'; // Importa decorators para inyección de dependencias.
import { Product } from '../models'; // Importa el modelo de tarea.

@injectable() // Marca esta clase como un servicio que puede ser inyectado en otros lugares mediante 'tsyringe'.
export default class ProductService {
    constructor(
        @inject(ProductRepository) private productRepository: ProductRepository // Inyecta una instancia de TaskRepository en el constructor.
    ) {}

    // Método para obtener todas las tareas.
    async getAllProducts() {
        return await this.productRepository.findAll(); // Llama al método findAll del repositorio de tareas para obtener todas las tareas.
    }

    // Método para obtener una tarea específica por su ID.
    async getProductById(id: number) {
        return await this.productRepository.findById(id); // Llama al método findById del repositorio de tareas para obtener una tarea por su ID.
    }

    // Método para obtener todas las tareas asociadas a un usuario específico por su ID.
    async getProductsByUserId(userId: number) {
        return await this.productRepository.findByUserId(userId); // Llama al método findByUserId del repositorio de tareas para obtener tareas de un usuario específico.
    }

    // Método para crear una nueva tarea.
    async createProduct(product: CreationAttributes<Product>) {
        return await this.productRepository.create(product); // Llama al método create del repositorio de tareas para crear una nueva tarea.
    }

    // Método para actualizar una tarea existente.
    async updateProduct(product:Product){
        return await this.productRepository.update(product);
    }

    // Método para eliminar una tarea existente.
    async deleteProduct(id: number) {
        return await this.productRepository.delete(id);
    }

}
