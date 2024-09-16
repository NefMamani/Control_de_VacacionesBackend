const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Empleado = require('./empleado');
const EstadoVacacion = require('./estadoVacaciones');

const Vacacion = sequelize.define('Vacacion', {
  idVacaciones: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  fechaSolicitud: {
    type: DataTypes.DATE,
    allowNull: false
  },
  diasSolicitados: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  fechaInicio: {
    type: DataTypes.DATE,
    allowNull: false
  },
  fechaFin: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  tableName: 'vacaciones',
  timestamps: false
});

Vacacion.belongsTo(Empleado, { foreignKey: 'idEmpleados' });
Vacacion.belongsTo(EstadoVacacion, { foreignKey: 'idEstadoVacaciones' });

module.exports = Vacacion;
