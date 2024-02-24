const DireccionEnvioDAO = require('./DireccionEnvioDAO');

describe('DireccionEnvioDAO', () => {
    let direccionEnvioId;

    test('debería agregar una dirección de envío correctamente', async () => {
        const direccionEnvio = {
            idUsuario: 1,
            calle: 'Calle Principal',
            numero: '123',
            ciudad: 'Ciudad Principal',
            estado: 'Estado Principal',
            codigoPostal: '12345',
            pais: 'País Principal'
        };

        const direccionAgregada = await DireccionEnvioDAO.agregar(direccionEnvio);
        expect(direccionAgregada.idUsuario).toBe(direccionEnvio.idUsuario);
        expect(direccionAgregada.calle).toBe(direccionEnvio.calle);
        expect(direccionAgregada.numero).toBe(direccionEnvio.numero);

        direccionEnvioId = direccionAgregada.id; // Guardar el ID para las pruebas posteriores
    });

    test('debería consultar una dirección de envío por ID de usuario correctamente', async () => {
        const direccionConsultada = await DireccionEnvioDAO.consultarPorUsuario(1);
        expect(direccionConsultada.id).toBe(direccionEnvioId);
    });

    test('debería actualizar una dirección de envío correctamente', async () => {
        const nuevaDireccion = {
            calle: 'Nueva Calle',
            numero: '456',
            ciudad: 'Nueva Ciudad',
            estado: 'Nuevo Estado',
            codigoPostal: '54321',
            pais: 'Nuevo País'
        };

        const direccionActualizada = await DireccionEnvioDAO.actualizar(1, nuevaDireccion);
        expect(direccionActualizada).toBeTruthy(); // Verifica que la actualización fue exitosa
    });

    test('debería eliminar una dirección de envío correctamente', async () => {
        await DireccionEnvioDAO.eliminar(1);
        const direccionEliminada = await DireccionEnvioDAO.consultarPorUsuario(1);
        expect(direccionEliminada).toBeNull(); // Verifica que la dirección ya no exista
    });
});
