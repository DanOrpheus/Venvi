'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Mensajes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idRemitente: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:'Usuarios',
          key:'id',
        }
      },
      idDestinatario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:'Usuarios',
          key:'id',
        }
      },
      contenido: {
        type: Sequelize.STRING
      },
      fecha: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Mensajes');
  }
};