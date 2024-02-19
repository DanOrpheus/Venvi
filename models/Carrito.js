'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carrito extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Carrito.belongsTo(models.Usuario,{foreignKey:'idUsuario'})
      Carrito.hasMany(models.ProductoCarrito,{foreignKey:'idCarrito'})
    }
  }
  Carrito.init({
    total: DataTypes.DECIMAL,
    idUsuario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Carrito',
  });
  return Carrito;
};