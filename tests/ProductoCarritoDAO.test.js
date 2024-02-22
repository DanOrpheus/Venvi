const ProductoCarritoDAO = require('./ProductoCarritoDAO');

describe('ProductoCarritoDAO', () => {
    it('debería agregar un producto al carrito correctamente', async () => {
        // Simular un producto en carrito
        const productoCarrito = {
            idCarrito: 1,
            idProducto: 1,
            cantidad: 2
        };
        // Agregar el producto al carrito y verificar que se agregó correctamente
        const productoAgregado = await ProductoCarritoDAO.agregar(productoCarrito);
        expect(productoAgregado.idCarrito).toBe(productoCarrito.idCarrito);
        expect(productoAgregado.idProducto).toBe(productoCarrito.idProducto);
        expect(productoAgregado.cantidad).toBe(productoCarrito.cantidad);
    });

    // Agrega más pruebas aquí según sea necesario para otros métodos del DAO
});
