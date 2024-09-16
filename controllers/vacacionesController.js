const Sequelize = require('sequelize');
const Vacacion = require('../models/vacaciones');
const Empleado = require('../models/empleado');
const EstadoVacacion = require('../models/estadoVacaciones');
const EscalaVacacion = require('../models/escalaVacaciones');

async function validarDiasVacaciones(diasSolicitados, empleadoId) {
  const empleado = await Empleado.findByPk(empleadoId);
  if (!empleado) {
    throw new Error('Empleado no encontrado');
  }
  const fechaActual = new Date();
  const fechaInicio = new Date(empleado.fecha_inicio);
  let antiguedad = fechaActual.getFullYear() - fechaInicio.getFullYear();
  if (fechaActual.getMonth() < fechaInicio.getMonth() || 
      (fechaActual.getMonth() === fechaInicio.getMonth() && fechaActual.getDate() < fechaInicio.getDate())) {
    antiguedad--;
  }

  const escala = await EscalaVacacion.findOne({
    where: {
      aniosMinimo: { [Sequelize.Op.lte]: antiguedad },
      aniosMaximo: { [Sequelize.Op.gte]: antiguedad }
    }
  });
  if (!escala) {
    throw new Error('No hay una escala de vacaciones disponible para esta antigüedad');
  }
  if (diasSolicitados > escala.diasVacaciones) {
    throw new Error(`No puede solicitar más de ${escala.diasVacaciones} días de vacaciones`);
  }
  return true; 
}

exports.obtenerVacaciones = async (req, res) => {
  try {
    const vacaciones = await Vacacion.findAll({
      include: [
        { model: Empleado, attributes: ['primerNombre', 'apellidoPaterno'] },
        { model: EstadoVacacion, attributes: ['descripcion'] }
      ]
    });
    res.json(vacaciones);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener vacaciones' });
  }
};

exports.crearVacacion = async (req, res) => {
  try {
    await validarDiasVacaciones(req.body.diasSolicitados, req.body.idEmpleados);
    req.body.fechaSolicitud = new Date().toISOString();
    const nuevaVacacion = await Vacacion.create(req.body);
    res.status(201).json(nuevaVacacion);
  } catch (error) {
    console.error('Error al crear vacación:', error);
    res.status(400).json({ error: error.message });
  }
};

exports.obtenerVacacionPorId = async (req, res) => {
  try {
    const vacacion = await Vacacion.findByPk(req.params.id);
    if (vacacion) {
      res.status(200).json(vacacion);
    } else {
      res.status(404).json({ error: 'Vacación no encontrada' });
    }
  } catch (error) {
    console.error('Error al obtener vacación por ID:', error);
    res.status(500).json({ error: 'Error al obtener vacación por ID', detalles: error.message });
  }
};

exports.actualizarVacacion = async (req, res) => {
  try {
    const vacacion = await Vacacion.findByPk(req.params.id);
    if (vacacion) {
      await vacacion.update(req.body);
      res.status(200).json(vacacion);
    } else {
      res.status(404).json({ error: 'Vacación no encontrada' });
    }
  } catch (error) {
    console.error('Error al actualizar vacación:', error);
    res.status(500).json({ error: 'Error al actualizar vacación', detalles: error.message });
  }
};

exports.eliminarVacacion = async (req, res) => {
  try {
    const vacacion = await Vacacion.findByPk(req.params.id);
    if (vacacion) {
      await vacacion.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Vacación no encontrada' });
    }
  } catch (error) {
    console.error('Error al eliminar vacación:', error);
    res.status(500).json({ error: 'Error al eliminar vacación', detalles: error.message });
  }
};
