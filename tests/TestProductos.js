const categoriaProductoDAO = require('../dataAccess/CategoriaProductoDAO')
const CategoriaProducto = require('../entidades/CategoriaProducto')

async function main() {
    //CATEGORIAS DE PRODUCTO
    //agregar
    const categoriaTest1 = new CategoriaProducto("Joyería", "Protductos varios de joyería")
    const categoriaTest2 = new CategoriaProducto("Lectura", "Libros, revistas de generos varios")
    const categoriaTest3 = new CategoriaProducto("Ropa de Hombre", "Ropa variada para hombre")

    // console.log('Agregando categorias...');
    // await categoriaProductoDAO.agregar(categoriaTest1)
    // await categoriaProductoDAO.agregar(categoriaTest2)
    // await categoriaProductoDAO.agregar(categoriaTest3)

    //consultar
    console.log('Consultando todos las categorias...');
    let consulta = await categoriaProductoDAO.consultarTodos()
    console.log(consulta);

    console.log('Consultando categoria por id 1...');
    consulta = await categoriaProductoDAO.consultadPorId(1)
    console.log(consulta);

    console.log('Consultando categoria por nombre -Electronicos-');
    consulta = await categoriaProductoDAO.consultadPorNombre('Electronicos')
    console.log(consulta);

    //eliminar
    console.log('Eliminando categoria por id 1...');
    let categoria = await categoriaProductoDAO.consultadPorNombre('Cosmeticos')
    consulta = await categoriaProductoDAO.eliminar(categoria.id)

    //PRODUCTOS

}

main()
