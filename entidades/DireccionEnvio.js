class DireccionEnvio {
    constructor(idUsuario, calle, numero, ciudad, estado, codigoPostal, pais) {
        this.idUsuario = idUsuario
        this.calle = calle
        this.numero = numero
        this.ciudad = ciudad
        this.estado = estado
        this.codigoPostal = codigoPostal
        this.pais = pais
    }
}
module.exports = DireccionEnvio