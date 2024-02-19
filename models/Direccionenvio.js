'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DireccionEnvio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      DireccionEnvio.belongsToMany(models.Venta,{foreignKey:'idDireccionEnvio'})
      DireccionEnvio.belongsTo(models.usuario,{foreignKey:'idDireccionEnvio'})
    }
  }
  DireccionEnvio.init({
    idUsuario:DataTypes.INTEGER,
    calle: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    ciudad: DataTypes.STRING,
    estado: DataTypes.STRING,
    codigoPostal: DataTypes.INTEGER,
    pais: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DireccionEnvio',
  });
  return DireccionEnvio;
};