'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Laptop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Laptop.init({
    marca: DataTypes.STRING,
    modelo: DataTypes.STRING,
    procesador: DataTypes.STRING,
    ram: DataTypes.INTEGER,
    almacenamiento: DataTypes.STRING,
    pantalla: DataTypes.FLOAT,
    grafica: DataTypes.STRING,
    tiempo_bateria: DataTypes.FLOAT,
    peso: DataTypes.FLOAT,
    precio: DataTypes.DECIMAL,
    fecha_lanzamiento: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Laptop',
  });
  return Laptop;
};