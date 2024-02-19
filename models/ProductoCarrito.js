'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductoCarrito extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ProductoCarrito.belongsTo(models.Carrito,{foreignKey:'idCarrito'})     
      ProductoCarrito.belongsTo(models.Producto,{foreignKey:'idProducto'})
    }
  }
  ProductoCarrito.init({
    idCarrito:DataTypes.INTEGER,
    idProducto:DataTypes.INTEGER,
    cantidad: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProductoCarrito',
  });
  return ProductoCarrito;
};