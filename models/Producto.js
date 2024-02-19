'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Producto.hasMany(models.ProductoCarrito,{foreignKey:'idProducto'})
      Producto.hasMany(models.ProductoVenta,{foreignKey:'idProducto'})
      Producto.hasOne(models.CategoriaProducto,{foreignKey:'idCategoria'})
    }
  }
  Producto.init({
    idVendedor:DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    foto: DataTypes.STRING,
    precio: DataTypes.DECIMAL,
    cantidadDisponible: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    idCategoria:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Producto',
  });
  return Producto;
};