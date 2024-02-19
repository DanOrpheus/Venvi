'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Usuario.hasMany(models.Mensaje,{foreignKey:'idRemitente'})
      Usuario.hasMany(models.Mensaje,{foreignKey:'idDestinatario'})
      Usuario.hasOne(models.Carrito,{foreignKey:'idUsuario'})
      Usuario.hasMany(models.Producto,{foreignKey:'idVendedor'})
      Usuario.hasMany(models.Venta,{foreignKey:'idComprador'})
    }
  }
  Usuario.init({
    nombre: DataTypes.STRING,
    foto: DataTypes.STRING,
    password: DataTypes.STRING,
    correo: DataTypes.STRING,
    rating: DataTypes.DECIMAL,
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};