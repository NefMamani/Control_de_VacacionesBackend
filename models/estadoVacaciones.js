const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const EstadoVacacion = sequelize.define('EstadoVacacion', {
  idEstadoVacaciones: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  descripcion: {
    type: DataTypes.STRING(50),
    allowNull: false
  }
}, {
  tableName: 'estadovacaciones',
  timestamps: false
});

module.exports = EstadoVacacion;
