const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Empleado = sequelize.define('Empleado', {
  idEmpleados: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  primerNombre: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  segundoNombre: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  apellidoPaterno: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  apellidoMaterno: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  fecha_inicio: {
    type: DataTypes.DATE,
    allowNull: false
  },
  cargo: {
    type: DataTypes.STRING(100),
    allowNull: true
  }
}, {
  tableName: 'empleados',
  timestamps: false
});

module.exports = Empleado;
