const {CategoriaProducto} = require('../models');

class CategoriaProductoDAO{

    constructor() {

    }
    async agregar(categoria){
        try {
            const categoriaAgregada = await CategoriaProducto.create(categoria)
            console.log('Categoria de Producto agregada con éxito');
            return categoriaAgregada;
        } catch (error) {
            console.log('Ha surgido un error al agregar la categoria de producto',error);
        }
    }

    async consultarTodos(){
        try {
            const categorias = await CategoriaProducto.findAll()
            return categorias;
        } catch (error) {
            console.log('Ha surgido un error al consultar categorias',error);
        }
    }

    async consultadPorId(id){
        try {
            const productoConsultado = await CategoriaProducto.findByPk(id)
            console.log('Categoria de producto consultada con éxito');
            return productoConsultado;
        } catch (error) {
            console.log('Ha surgido un error al consultar la categoria de producto',error);
        }
    }

    async consultadPorNombre(nombre){
        try {
            const productoConsultado = await CategoriaProducto.findOne({where:{nombre:nombre}})
            console.log('Categoria de producto consultada con éxito');
            return productoConsultado;
        } catch (error) {
            console.log('Ha surgido un error al consultar la categoria de producto',error);
        }
    }

    async actualizar(id,nuevaCategoria){
        try {
            const categoriaActualizada = await CategoriaProducto.update(nuevaCategoria,{where:{id}})
            console.log('Categoria de producto actualizada con éxito');
            return categoriaActualizada;
        } catch (error) {
            console.log('Ha surgido un error al actualizar la categoria de producto',error);
        }
    }
    
    async eliminar(id){
        try {
            if(!this.consultadPorId(id)){
                console.log('La categoria que desea eliminar no existe');
            }
            await CategoriaProducto.destroy({where:{id}})
            console.log('Categoria de producto eliminada con éxito');
        } catch (error) {
            console.log('Ha surgido un error al eliminar la categoria de producto',error);
        }
    }

}

module.exports = new CategoriaProductoDAO()