const EscalaVacacion = require('../models/escalaVacaciones');

exports.obtenerEscalas = async (req, res) => {
  try {
    const escalas = await EscalaVacacion.findAll();
    res.json(escalas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener escala de vacaciones' });
  }
};
