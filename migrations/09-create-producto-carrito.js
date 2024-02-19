'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProductoCarritos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idCarrito:{
        type:Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:'Carritos',
          key:'id',
        }
      },
      idProducto:{
        type:Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:'Productos',
          key:'id',
        }
      },
      cantidad: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('ProductoCarritos');
  }
};