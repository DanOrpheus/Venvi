const UsuarioDAO = require('../dataAccess/UsuarioDAO')
const Usuario = require('../entidades/Usuario')

async function main() {

    //agregar
    const usuario1 = new Usuario("Sandra Lopez",null,"123456","maria@gmail.com",10)
    const usuario2 = new Usuario("Jesus Ruiz",null,"123456","jorge@gmail.com",9)
    const usuario3 = new Usuario("Maria Hernandez",null,"123456","paola@gmail.com",8)

    console.log('Agregando usuarios...');
    await UsuarioDAO.agregar(usuario1)
    await UsuarioDAO.agregar(usuario2)
    await UsuarioDAO.agregar(usuario3)

    //consultar
    console.log('Consultando todos los usuarios...');
    let consulta = await UsuarioDAO.consultarTodos()
    console.log(consulta);

    console.log('Consultando usuario por id 1...');
    consulta = await UsuarioDAO.consultarPorId(1)
    console.log(consulta);

    console.log('Consultando usuario por nombre -Maria Lopez-');
    consulta = await UsuarioDAO.consultarPorNombre('Maria Lopez')
    console.log(consulta);

    //actualizar
    console.log('Actualizando usuario Jesus Ruiz...');
    const nuevoUsuario= new Usuario("Jesus Ruiz",null,"123456","jesus.ruiz@gmail.com",8)
    consulta = await UsuarioDAO.consultarPorNombre(nuevoUsuario.nombre)
    let usuarioActualizado = await UsuarioDAO.actualizar(consulta.id,nuevoUsuario)
    console.log(usuarioActualizado);

    //eliminar
    console.log('Eliminando usuario por id...');
    let usuario = await UsuarioDAO.consultarPorNombre('Maria Hernandez')
    consulta = await UsuarioDAO.eliminar(usuario.id)

}

main()
