import { Cart } from './../models/cart';
import { injectable } from 'tsyringe'; // Importa el decorador @injectable para permitir la inyección de dependencias.
import { CreationAttributes } from 'sequelize'; // Importa CreationAttributes para tipar los atributos al crear un nuevo registro.

@injectable() // Marca la clase como inyectable, permitiendo que pueda ser inyectada en otros servicios o controladores.
export default class CartRepository {

    // Método create que añade al carrito
    async create(cart: CreationAttributes<Cart>) {
        return await Cart.create(cart); // Utiliza el método create de Sequelize para insertar una nueva tarea en la base de datos.
    }

    // Método para actualizar producto del carrito ID.
    async update(cart:Cart){
        return await cart.save();
    }

    // Método para eliminar producto del carrito.
    async delete(id: number) {
        const result = await Cart.destroy({
            where: { id }
        });
    
        return result > 0;
    }
}

/**
 * CreationAttributes<Task> es un tipo proporcionado por Sequelize que representa los atributos necesarios para crear una nueva instancia del modelo Task.
 */
