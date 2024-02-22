const CarritoDAO = require('./CarritoDAO');

describe('CarritoDAO', () => {
    it('debería agregar un carrito correctamente', async () => {
        // Simular un carrito
        const carrito = {
            idUsuario: 1,
            total: 0
        };
        // Agregar el carrito y verificar que se agregó correctamente
        const carritoAgregado = await CarritoDAO.agregar(carrito);
        expect(carritoAgregado.idUsuario).toBe(carrito.idUsuario);
        expect(carritoAgregado.total).toBe(carrito.total);
    });

    // Agrega más pruebas aquí según sea necesario para otros métodos del DAO
});
