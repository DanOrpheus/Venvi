const ProductoCarritoDAO = require('./ProductoCarritoDAO');

describe('ProductoCarritoDAO', () => {
    let productoCarritoId;

    test('debería agregar un producto al carrito correctamente', async () => {
        const productoCarrito = {
            idCarrito: 1,
            idProducto: 1,
            cantidad: 2
        };

        const productoAgregado = await ProductoCarritoDAO.agregar(productoCarrito);
        expect(productoAgregado.idCarrito).toBe(productoCarrito.idCarrito);
        expect(productoAgregado.idProducto).toBe(productoCarrito.idProducto);
        expect(productoAgregado.cantidad).toBe(productoCarrito.cantidad);

        productoCarritoId = productoAgregado.id; // Guardar el ID para las pruebas posteriores
    });

    test('debería consultar los productos en el carrito correctamente', async () => {
        const productosEnCarrito = await ProductoCarritoDAO.consultarPorCarrito(1);
        expect(productosEnCarrito.length).toBeGreaterThan(0); // Verifica que se haya encontrado al menos un producto
    });

    test('debería actualizar la cantidad de un producto en el carrito correctamente', async () => {
        const nuevaCantidad = 3;
        const productoActualizado = await ProductoCarritoDAO.actualizarCantidad(productoCarritoId, nuevaCantidad);
        expect(productoActualizado).toBeTruthy(); // Verifica que la actualización fue exitosa
    });

    test('debería eliminar un producto del carrito correctamente', async () => {
        await ProductoCarritoDAO.eliminar(productoCarritoId);
        const productoEliminado = await ProductoCarritoDAO.consultarPorCarrito(1);
        expect(productoEliminado.length).toBe(0); // Verifica que ya no haya productos en el carrito
    });
});
