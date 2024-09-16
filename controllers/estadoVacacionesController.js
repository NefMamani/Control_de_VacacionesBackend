const EstadoVacacion = require('../models/estadoVacaciones');

exports.obtenerEstados = async (req, res) => {
  try {
    const estados = await EstadoVacacion.findAll();
    res.json(estados);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener estados de vacaciones' });
  }
};
