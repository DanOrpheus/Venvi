'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Venta', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idComprador:{
        type:Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:'Usuarios',
          key:'id',
        }
      },
      fecha: {
        type: Sequelize.DATE
      },
      subtotal: {
        type: Sequelize.DECIMAL
      },
      envio: {
        type: Sequelize.DECIMAL
      },
      total: {
        type: Sequelize.DECIMAL
      },
      iva: {
        type: Sequelize.INTEGER
      },
      idDireccionEnvio:{
        type:Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:'DireccionEnvios',
          key:'id',
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      idDireccionEnvio:{
        type:Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:'DireccionEnvios',
          key:'id',
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Venta');
  }
};