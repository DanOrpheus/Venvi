const CarritoDAO = require('./CarritoDAO');

describe('CarritoDAO', () => {
    let carritoId;

    test('debería agregar un carrito correctamente', async () => {
        const carrito = {
            idUsuario: 1,
            total: 0
        };

        const carritoAgregado = await CarritoDAO.agregar(carrito);
        expect(carritoAgregado.idUsuario).toBe(carrito.idUsuario);
        expect(carritoAgregado.total).toBe(carrito.total);

        carritoId = carritoAgregado.id; // Guardar el ID para las pruebas posteriores
    });

    test('debería consultar un carrito por ID correctamente', async () => {
        const carritoConsultado = await CarritoDAO.consultarPorId(carritoId);
        expect(carritoConsultado.id).toBe(carritoId);
    });

    test('debería actualizar el total de un carrito correctamente', async () => {
        const nuevoTotal = 100;
        const carritoActualizado = await CarritoDAO.actualizarTotal(carritoId, nuevoTotal);
        expect(carritoActualizado).toBeTruthy(); // Verifica que la actualización fue exitosa
    });

    test('debería eliminar un carrito correctamente', async () => {
        await CarritoDAO.eliminar(carritoId);
        const carritoEliminado = await CarritoDAO.consultarPorId(carritoId);
        expect(carritoEliminado).toBeNull(); // Verifica que el carrito ya no exista
    });
});
