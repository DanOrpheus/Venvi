const ProductoCarritoModel = require('../models/ProductoCarrito');

class ProductoCarritoDAO {
    constructor() {}

    async agregar(productoCarrito) {
        try {
            const productoCarritoAgregado = await ProductoCarritoModel.create(productoCarrito);
            console.log('Producto en carrito agregado con éxito');
            return productoCarritoAgregado;
        } catch (error) {
            console.log('Ha surgido un error al agregar el producto en carrito', error);
        }
    }

    async consultarPorCarrito(idCarrito) {
        try {
            const productosEnCarrito = await ProductoCarritoModel.findAll({ where: { idCarrito: idCarrito } });
            return productosEnCarrito;
        } catch (error) {
            console.log('Ha surgido un error al consultar los productos en el carrito', error);
        }
    }

    async actualizarCantidad(idCarrito, idProducto, nuevaCantidad) {
        try {
            const productoCarritoActualizado = await ProductoCarritoModel.update({ cantidad: nuevaCantidad }, { where: { idCarrito: idCarrito, idProducto: idProducto } });
            console.log('Cantidad del producto en el carrito actualizada con éxito');
            return productoCarritoActualizado;
        } catch (error) {
            console.log('Ha surgido un error al actualizar la cantidad del producto en el carrito', error);
        }
    }

    async eliminar(idCarrito, idProducto) {
        try {
            await ProductoCarritoModel.destroy({ where: { idCarrito: idCarrito, idProducto: idProducto } });
            console.log('Producto eliminado del carrito con éxito');
        } catch (error) {
            console.log('Ha surgido un error al eliminar el producto del carrito', error);
        }
    }

    async vaciarCarrito(idCarrito) {
        try {
            await ProductoCarritoModel.destroy({ where: { idCarrito: idCarrito } });
            console.log('Carrito vaciado con éxito');
        } catch (error) {
            console.log('Ha surgido un error al vaciar el carrito', error);
        }
    }
}

module.exports = new ProductoCarritoDAO();
