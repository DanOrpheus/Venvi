'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Venta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Venta.hasOne(models.DireccionEnvio,{foreignKey:'idDireccionEnvio'})
      Venta.hasMany(models.ProductoVenta,{foreignKey:'idVenta'})
    }
  }
  Venta.init({
    idComprador:DataTypes.INTEGER,
    fecha: DataTypes.DATE,
    subtotal: DataTypes.DECIMAL,
    envio: DataTypes.DECIMAL,
    total: DataTypes.DECIMAL,
    iva: DataTypes.INTEGER,
    idDireccionEnvio:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Venta',
  });
  return Venta;
};