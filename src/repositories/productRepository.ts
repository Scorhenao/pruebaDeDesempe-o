import { Product } from './../models/product';
import { injectable } from 'tsyringe'; // Importa el decorador @injectable para permitir la inyección de dependencias.
import { CreationAttributes } from 'sequelize'; // Importa CreationAttributes para tipar los atributos al crear un nuevo registro.

@injectable() // Marca la clase como inyectable, permitiendo que pueda ser inyectada en otros servicios o controladores.
export default class ProductRepository {
    // Método para obtener todas las tareas de la base de datos.
    async findAll() {
        return await Product.findAll(); // Utiliza el método findAll de Sequelize para obtener todas las instancias del modelo Task.
    }

    // Método para obtener una tarea específica por su ID.
    async findById(id: number): Promise<Product | null> {
        return await Product.findByPk(id); // Utiliza el método findByPk de Sequelize para obtener una tarea por su clave primaria (ID).
    }

    // Método para obtener todas las tareas asociadas a un usuario específico.
    async findByUserId(productId: number) {
        return await Product.findAll({ 
            where: { productId } // Filtra las tareas por el ID del usuario
        });
    }

    // Método para crear una nueva tarea.
    async create(product: CreationAttributes<Product>) {
        return await Product.create(product); // Utiliza el método create de Sequelize para insertar una nueva tarea en la base de datos.
    }

    // Método para actualizar una tarea existente por su ID.
    async update(product:Product){
        Product.findOne({ where: { id: product.id }}).then(productParam => {
            if (productParam){

                productParam.name = product.name;
                productParam.price = product.price;
                productParam.description = product.description;
                productParam.stock = product.stock;
                productParam.save().then(() => {
                    return 'task updated!';
                })
            }

        });
    }

    // Método para eliminar una tarea existente por su ID.
    async delete(id: number) {
        const result = await Product.destroy({
            where: { id }
        });
    
        return result > 0;
    }
}

/**
 * CreationAttributes<Task> es un tipo proporcionado por Sequelize que representa los atributos necesarios para crear una nueva instancia del modelo Task.
 */
