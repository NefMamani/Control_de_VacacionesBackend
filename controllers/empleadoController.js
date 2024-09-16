const Empleado = require('../models/empleado');

exports.obtenerEmpleados = async (req, res) => {
  try {
    const empleados = await Empleado.findAll();
    res.json(empleados);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener empleados' });
  }
};

exports.crearEmpleado = async (req, res) => {
  try {
    console.log('Datos recibidos:', req.body);
    const nuevoEmpleado = await Empleado.create(req.body);
    res.status(201).json(nuevoEmpleado);
  } catch (error) {
    console.error('Error al crear empleado:', error);
    res.status(500).json({error: 'Error al crear empleado', detalles: error.message });
  }
};

exports.obtenerEmpleadoPorId = async (req, res) => {
  try {
    const empleado = await Empleado.findByPk(req.params.id); 
    if (empleado) {
      res.json(empleado);
    } else {
      res.status(404).json({ error: 'Empleado no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener empleado', detalles: error.message });
  }
};

exports.actualizarEmpleado = async (req, res) => {
  try {
    console.log('Datos recibidos:', req.body);
    const empleado = await Empleado.findByPk(req.params.id);
    if (empleado) {
      const updatedEmpleado = await empleado.update(req.body);
      res.json(updatedEmpleado);
    } else {
      res.status(404).json({ error: 'Empleado no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar empleado', detalles: error.message });
  }
};

exports.eliminarEmpleado = async (req, res) => {
  try {
    const empleado = await Empleado.findByPk(req.params.id);
    if (empleado) {
      await empleado.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Empleado no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar empleado', detalles: error.message });
  }
};
