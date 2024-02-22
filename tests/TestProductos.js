const categoriaProductoDAO = require('../dataAccess/CategoriaProductoDAO')
const CategoriaProducto = require('../entidades/CategoriaProducto')
const ProductoDAO = require('../dataAccess/ProductoDAO')
const Producto = require('../entidades/Producto')
const UsuarioDAO = require('../dataAccess/UsuarioDAO')
const Usuario = require('../entidades/Usuario')

async function main() {
    // //CATEGORIAS DE PRODUCTO
    // //agregar
    // const categoriaTest1 = new CategoriaProducto("Joyería", "Protductos varios de joyería")
    // const categoriaTest2 = new CategoriaProducto("Lectura", "Libros, revistas de generos varios")
    // const categoriaTest3 = new CategoriaProducto("Ropa de Hombre", "Ropa variada para hombre")

    // console.log('Agregando categorias...');
    // await categoriaProductoDAO.agregar(categoriaTest1)
    // await categoriaProductoDAO.agregar(categoriaTest2)
    // await categoriaProductoDAO.agregar(categoriaTest3)

    // //consultar
    // console.log('Consultando todos las categorias...');
    // let consulta = await categoriaProductoDAO.consultarTodos()
    // console.log(consulta);

    // console.log('Consultando categoria por id 1...');
    // consulta = await categoriaProductoDAO.consultadPorId(1)
    // console.log(consulta);

    // console.log('Consultando categoria por nombre -Electronicos-');
    // consulta = await categoriaProductoDAO.consultadPorNombre('Electronicos')
    // console.log(consulta);

    // //actualizar
    // console.log('Actualizando categoria por id 1...');
    // let categoria = await categoriaProductoDAO.consultadPorNombre('Ropa de hombre')

    // const categoriaActualizada = new CategoriaProducto("Ropa de Hombre Juvenil", "Ropa variada para hombre")
    // consulta = await categoriaProductoDAO.actualizar(categoria.id,categoriaActualizada);

    // //eliminar
    // console.log('Eliminando categoria por id...');
    // categoria = await categoriaProductoDAO.consultadPorNombre('Joyería')
    // consulta = await categoriaProductoDAO.eliminar(categoria.id)

    //PRODUCTOS

    // //Creando vendedor de prueba
    // let testVendedor =  new Usuario("Carlos Lopez",null,"123456","carlos@gmail.com",10)
    // const vendedorAgregado = await UsuarioDAO.agregar(testVendedor)

    // //agregar
    // let categoriaRopa = await categoriaProductoDAO.consultadPorNombre('Ropa de Hombre Juvenil')
    // const productoTest1 = new Producto(vendedorAgregado.id,"Camiseta",null,150,5,"Camisetas talla mediana de algodon",categoriaRopa.id)
    // const productoTest2 = new Producto(vendedorAgregado.id,"Pantalon",null,300,2,"Pantalones de mezclilla",categoriaRopa.id)
    // const productoTest3 = new Producto(vendedorAgregado.id,"Sueter",null,150,5,"Sueter talla chica",categoriaRopa.id)

    // console.log('Agregando productos...');
    // await ProductoDAO.agregar(productoTest1)
    // await ProductoDAO.agregar(productoTest2)
    // await ProductoDAO.agregar(productoTest3)

    // //consultar
    // console.log('Consultando todos lps productos...');
    // consulta = await ProductoDAO.consultarTodos()
    // console.log(consulta);

    // console.log('Consultando producto por id 1...');
    // consulta = await ProductoDAO.consultarPorId(1)
    // console.log(consulta);

    // console.log('Consultando producto por nombre -Camiseta-');
    // consulta = await ProductoDAO.consultarPorNombre('Camiseta')
    // console.log(consulta);

    //actualizar
    console.log('Actualizando producto por id...');
    let producto = await ProductoDAO.consultarPorNombre('Sueter')

    const productoActualizado =new Producto(producto.idVendedor,"Sueter",null,300,5,"Sueter tallas chicas",producto.idCategoria)
    consulta = await ProductoDAO.actualizar(producto.id,productoActualizado);

    //eliminar
    console.log('Eliminando producto por id...');
    producto = await ProductoDAO.consultarPorNombre('Pantalon')
    consulta = await ProductoDAO.eliminar(producto.id)

}

main()
