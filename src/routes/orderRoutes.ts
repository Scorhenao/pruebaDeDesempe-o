import { Router } from 'express'; // Importa el objeto Router de Express para definir rutas específicas para las tareas.
import OrderController from '../controllers/orderController'; // Importa el controlador de tareas que maneja la lógica de las rutas.

export const orderRouter = Router(); // Crea una nueva instancia de Router para manejar las rutas relacionadas con tareas.

// Define las rutas y asigna los métodos del controlador para manejar las solicitudes.

// Ruta para obtener todas las tareas.
// Cuando se hace una solicitud GET a '/tasks', se llama al método getAllTasks del TaskController.
orderRouter.get('/', OrderController.getAllTasks);

// Ruta para obtener una tarea específica por su ID.
// Cuando se hace una solicitud GET a '/tasks/:id', se llama al método getTaskById del TaskController.
orderRouter.get('/:id', OrderController.getTaskById);

// Ruta para obtener todas las tareas asociadas a un usuario específico por su ID.
// Cuando se hace una solicitud GET a '/tasks/user/:userId', se llama al método getTasksByUserId del TaskController.
orderRouter.get('/user/:userId', OrderController.getTasksByUserId);

// Ruta para crear una nueva tarea.
// Cuando se hace una solicitud POST a '/tasks', se llama al método createTask del TaskController.
orderRouter.post('/', OrderController.createTask);

// Ruta para actualizar una tarea existente.
// Cuando se hace una solicitud PUT a '/tasks/:id', se llama al método updateTask del TaskController.
orderRouter.put('/',OrderController.updateTask);

// Ruta para eliminar una tarea existente.
// Cuando se hace una solicitud DELETE a '/tasks/:id', se llama al método deleteTask del TaskController.
orderRouter.delete('/:id', OrderController.deleteTask);
