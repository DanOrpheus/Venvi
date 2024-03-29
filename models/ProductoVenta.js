'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductoVenta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ProductoVenta.belongsTo(models.Producto,{foreignKey:'idProducto'})
      ProductoVenta.belongsTo(models.Venta,{foreignKey:'idVenta'})
    }
  }
  ProductoVenta.init({
    idProducto:DataTypes.INTEGER,
    IdVenta:DataTypes.INTEGER,
    cantidad: DataTypes.INTEGER,
    subtotal: DataTypes.DECIMAL,
  }, {
    sequelize,
    modelName: 'ProductoVenta',
  });
  return ProductoVenta;
};