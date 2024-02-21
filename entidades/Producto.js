class Producto{
    constructor(id,idVendedor,nombre,foto,precio,cantidadDisponible,descripcion,idCategoria) {
        this.id=id
        this.idVendedor=idVendedor
        this.nombre=nombre
        this.foto=foto
        this.precio=precio
        this.cantidadDisponible=cantidadDisponible
        this.descripcion=descripcion
        this.idCategoria=idCategoria
    }
}
module.exports = Producto