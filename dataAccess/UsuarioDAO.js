const { Usuario } = require('../models');

class UsuarioDAO{

    constructor() {

    }
    async agregar(usuario){
        try {
            const usuarioAgregado = await Usuario.create(usuario)
            console.log('Usuario agregado con éxito');
            return usuarioAgregado;
        } catch (error) {
            console.log('Ha surgido un error al agregar el usuario',error);
        }
    }

    async consultarTodos(){
        try {
            const usuarios = await Usuario.findAll()
            return usuarios;
        } catch (error) {
            console.log('Ha surgido un error al consultar los usuarios',error);
        }
    }

    async consultarPorId(id){
        try {
            const usuarioConsultado = await Usuario.findByPk(id)
            return usuarioConsultado;
        } catch (error) {
            console.log('Ha surgido un error al consultar el usuario',error);
        }
    }

    async consultarPorNombre(nombre){
        try {
            const usuarioConsultado = await Usuario.findOne({where:{nombre:nombre}})
            return usuarioConsultado;
        } catch (error) {
            console.log('Ha surgido un error al consultar el usuario',error);
        }
    }

    async actualizar(id,nuevoUsuario){
        try {
            const usuarioActualizada = await Usuario.update(nuevoUsuario,{where:{id}})
            console.log('Usuario actualizado con éxito');
            return usuarioActualizada;
        } catch (error) {
            console.log('Ha surgido un error al actualizar el usuario',error);
        }
    }
    
    async eliminar(id){
        try {
            if(!this.consultarPorId(id)){
                console.log('El usuario que desea eliminar no existe');
            }
            await Usuario.destroy({where:{id}})
            console.log('Usuario eliminado con éxito');
        } catch (error) {
            console.log('Ha surgido un error al eliminar el usuario',error);
        }
    }

}

module.exports = new UsuarioDAO()