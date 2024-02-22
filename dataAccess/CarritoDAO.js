const CarritoModel = require('../models/Carrito');

class CarritoDAO {
    constructor() {}

    async agregar(carrito) {
        try {
            const carritoAgregado = await CarritoModel.create(carrito);
            console.log('Carrito agregado con éxito');
            return carritoAgregado;
        } catch (error) {
            console.log('Ha surgido un error al agregar el carrito', error);
        }
    }

    async consultarPorUsuario(idUsuario) {
        try {
            const carritoConsultado = await CarritoModel.findOne({ where: { idUsuario: idUsuario } });
            return carritoConsultado;
        } catch (error) {
            console.log('Ha surgido un error al consultar el carrito por usuario', error);
        }
    }

    async actualizarTotal(idCarrito, nuevoTotal) {
        try {
            const carritoActualizado = await CarritoModel.update({ total: nuevoTotal }, { where: { id: idCarrito } });
            console.log('Total del carrito actualizado con éxito');
            return carritoActualizado;
        } catch (error) {
            console.log('Ha surgido un error al actualizar el total del carrito', error);
        }
    }

    async eliminar(idCarrito) {
        try {
            await CarritoModel.destroy({ where: { id: idCarrito } });
            console.log('Carrito eliminado con éxito');
        } catch (error) {
            console.log('Ha surgido un error al eliminar el carrito', error);
        }
    }
}

module.exports = new CarritoDAO();
