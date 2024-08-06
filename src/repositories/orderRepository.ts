import { Order } from './../models/order';
import { injectable } from 'tsyringe'; // Importa el decorador @injectable para permitir la inyección de dependencias.
import { CreationAttributes } from 'sequelize'; // Importa CreationAttributes para tipar los atributos al crear un nuevo registro.

@injectable() // Marca la clase como inyectable, permitiendo que pueda ser inyectada en otros servicios o controladores.
export default class OrderRepository {
    async findAll() {
        return await Order.findAll(); // Utiliza el método findAll de Sequelize para obtener todas las instancias del modelo
    }

    async findById(id: number): Promise<Order | null> {
        return await Order.findByPk(id); // Utiliza el método findByPk de Sequelize para obtener una tarea por su clave primaria (ID).
    }

    // Método para obtener todo específico.
    async findByUserId(orderId: number) {
        return await Order.findAll({ 
            where: { orderId } // Filtra por el ID del usuario
        });
    }

    // Método para crear una nueva tarea.
    async create(order: CreationAttributes<Order>) {
        return await Order.create(order); // Utiliza el método create de Sequelize para insertar una nueva tarea en la base de datos.
    }

    // Método para actualizar una tarea existente por su ID.
    async update(order:Order){
        Order.findOne({ where: { id: order.id }}).then(orderParam => {
            if (orderParam){

                orderParam.total = order.total;
                orderParam.save().then(() => {
                    return 'task updated!';
                })
            }

        });
    }

    // Método para eliminar una tarea existente por su ID.
    async delete(id: number) {
        const result = await Order.destroy({
            where: { id }
        });
    
        return result > 0;
    }
}

/**
 * CreationAttributes<Task> es un tipo proporcionado por Sequelize que representa los atributos necesarios para crear una nueva instancia del modelo Task.
 */
