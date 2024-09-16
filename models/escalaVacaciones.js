const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const EscalaVacacion = sequelize.define('EscalaVacacion', {
  idEscalaVacaciones: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  aniosMinimo: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  aniosMaximo: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  diasVacaciones: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'escala_vacaciones',
  timestamps: false
});

module.exports = EscalaVacacion;
