'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Laptops', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      marca: {
        type: Sequelize.STRING
      },
      modelo: {
        type: Sequelize.STRING
      },
      procesador: {
        type: Sequelize.STRING
      },
      ram: {
        type: Sequelize.INTEGER
      },
      almacenamiento: {
        type: Sequelize.STRING
      },
      pantalla: {
        type: Sequelize.FLOAT
      },
      grafica: {
        type: Sequelize.STRING
      },
      tiempo_bateria: {
        type: Sequelize.FLOAT
      },
      peso: {
        type: Sequelize.FLOAT
      },
      precio: {
        type: Sequelize.DECIMAL
      },
      fecha_lanzamiento: {
        type: Sequelize.STRING
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Laptops');
  }
};