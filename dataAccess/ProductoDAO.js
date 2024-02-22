const { Producto } = require('../models');

class ProductoDAO{

    constructor() {

    }
    async agregar(producto){
        try {
            const productoAgregado = await Producto.create(producto)
            console.log('Producto agregado con éxito');
            return productoAgregado;
        } catch (error) {
            console.log('Ha surgido un error al agregar el prodcuto',error);
        }
    }

    async consultarTodos(){
        try {
            const prodcutos = await Producto.findAll()
            return prodcutos;
        } catch (error) {
            console.log('Ha surgido un error al consultar los productos',error);
        }
    }

    async consultarPorId(id){
        try {
            const productoConsultado = await Producto.findByPk(id)
            return productoConsultado;
        } catch (error) {
            console.log('Ha surgido un error al consultar el producto',error);
        }
    }

    async consultarPorNombre(nombre){
        try {
            const productoConsultado = await Producto.findOne({where:{nombre:nombre}})
            return productoConsultado;
        } catch (error) {
            console.log('Ha surgido un error al consultar el producto',error);
        }
    }

    async actualizar(id,nuevoProducto){
        try {
            const productoActualizada = await Producto.update(nuevoProducto,{where:{id}})
            console.log('Producto actualizado con éxito');
            return productoActualizada;
        } catch (error) {
            console.log('Ha surgido un error al actualizar el producto',error);
        }
    }
    
    async eliminar(id){
        try {
            if(!this.consultarPorId(id)){
                console.log('El producto que desea eliminar no existe');
            }
            await Producto.destroy({where:{id}})
            console.log('Producto eliminado con éxito');
        } catch (error) {
            console.log('Ha surgido un error al eliminar el producto',error);
        }
    }

}

module.exports = new ProductoDAO()