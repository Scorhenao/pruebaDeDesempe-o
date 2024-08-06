import { Request, Response } from 'express'; // Importa las interfaces Request y Response de Express.
import { container } from "tsyringe";
import ProductService from "../services/productService";


export default class ProductController {
    // Método estático para obtener todas las tareas.
    static async getAllProducts(req: Request, res: Response) {
        const productService = container.resolve(ProductService); // Resuelve una instancia de TaskService desde el contenedor.
        const products = await productService.getAllProducts(); // Llama al método getAllTasks del servicio de tareas.
        res.json(products); // Envía la lista de tareas como respuesta en formato JSON.
    }

    // Método estático para obtener una tarea por su ID.
    static async getProductById(req: Request, res: Response) {
        const productService = container.resolve(ProductService); // Resuelve una instancia de TaskService desde el contenedor.
        const product = await productService.getProductById(parseInt(req.params.id)); // Llama al método getTaskById del servicio de tareas, pasando el ID de la tarea como parámetro.
        res.json(product); // Envía la tarea encontrada como respuesta en formato JSON.
    }

    // Método estático para obtener tareas por el ID de usuario.
    static async getProductsByUserId(req: Request, res: Response) {
        const productService = container.resolve(ProductService); // Resuelve una instancia de TaskService desde el contenedor.
        const products = await productService.getProductsByUserId(parseInt(req.params.userId)); // Llama al método getTasksByUserId del servicio de tareas, pasando el ID de usuario como parámetro.
        res.json(products); // Envía la lista de tareas encontradas como respuesta en formato JSON.
    }

    // Método estático para crear una nueva tarea.
    static async createProduct(req: Request, res: Response) {
        const productService = container.resolve(ProductService); // Resuelve una instancia de TaskService desde el contenedor.
        const product = await productService.createProduct(req.body); // Llama al método createTask del servicio de tareas, pasando los datos de la nueva tarea como parámetro.

        // Comenta las siguientes líneas para depurar los datos de la tarea en formato JSON.
        // const dataTask = req.body
        // const dataTaskObject = JSON.stringify(dataTask)
        // console.log(dataTaskObject);
        res.status(201).json(product); // Envía la tarea creada como respuesta en formato JSON, con el código de estado 201 (Created).
    }

    // Método estático para actualizar un producto existente con su id.    
    static async updateProduct(req: Request, res: Response) {
        const productService = container.resolve(ProductService);
        const product = await productService.updateProduct(req.body);
        res.status(200).json(product);
    }

    // Método estático para eliminar una tarea existente.
    static async deleteProduct(req: Request, res: Response) {
        const productService = container.resolve(ProductService);
        const product = await productService.deleteProduct(parseInt(req.params.id));

        if (!product) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.status(204).send(); // 204 NOT content
    }
}
