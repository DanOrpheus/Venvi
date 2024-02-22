const DireccionEnvioModel = require('../models/DireccionEnvio');

class DireccionEnvioDAO {
    constructor() {}

    async agregar(direccionEnvio) {
        try {
            const direccionAgregada = await DireccionEnvioModel.create(direccionEnvio);
            console.log('Dirección de envío agregada con éxito');
            return direccionAgregada;
        } catch (error) {
            console.log('Ha surgido un error al agregar la dirección de envío', error);
        }
    }

    async consultarPorUsuario(idUsuario) {
        try {
            const direccionEnvio = await DireccionEnvioModel.findOne({ where: { idUsuario: idUsuario } });
            return direccionEnvio;
        } catch (error) {
            console.log('Ha surgido un error al consultar la dirección de envío por usuario', error);
        }
    }

    async actualizar(idUsuario, nuevaDireccion) {
        try {
            const direccionActualizada = await DireccionEnvioModel.update(nuevaDireccion, { where: { idUsuario: idUsuario } });
            console.log('Dirección de envío actualizada con éxito');
            return direccionActualizada;
        } catch (error) {
            console.log('Ha surgido un error al actualizar la dirección de envío', error);
        }
    }

    async eliminar(idUsuario) {
        try {
            await DireccionEnvioModel.destroy({ where: { idUsuario: idUsuario } });
            console.log('Dirección de envío eliminada con éxito');
        } catch (error) {
            console.log('Ha surgido un error al eliminar la dirección de envío', error);
        }
    }
}

module.exports = new DireccionEnvioDAO();
