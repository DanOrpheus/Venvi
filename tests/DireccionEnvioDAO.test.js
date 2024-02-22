const DireccionEnvioDAO = require('./DireccionEnvioDAO');

describe('DireccionEnvioDAO', () => {
    it('debería agregar una dirección de envío correctamente', async () => {
        // Simular una dirección de envío
        const direccionEnvio = {
            idUsuario: 1,
            calle: 'Calle Principal',
            numero: '123',
            ciudad: 'Ciudad Principal',
            estado: 'Estado Principal',
            codigoPostal: '12345',
            pais: 'País Principal'
        };
        // Agregar la dirección de envío y verificar que se agregó correctamente
        const direccionAgregada = await DireccionEnvioDAO.agregar(direccionEnvio);
        expect(direccionAgregada.idUsuario).toBe(direccionEnvio.idUsuario);
        expect(direccionAgregada.calle).toBe(direccionEnvio.calle);
        expect(direccionAgregada.numero).toBe(direccionEnvio.numero);
        expect(direccionAgregada.ciudad).toBe(direccionEnvio.ciudad);
        expect(direccionAgregada.estado).toBe(direccionEnvio.estado);
        expect(direccionAgregada.codigoPostal).toBe(direccionEnvio.codigoPostal);
        expect(direccionAgregada.pais).toBe(direccionEnvio.pais);
    });

    // Agrega más pruebas aquí según sea necesario para otros métodos del DAO
});
