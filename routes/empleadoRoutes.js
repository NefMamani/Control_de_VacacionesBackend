const express = require('express');
const router = express.Router();
const empleadoController = require('../controllers/empleadoController');

router.get('/', empleadoController.obtenerEmpleados);
router.post('/', empleadoController.crearEmpleado);
router.get('/:id', empleadoController.obtenerEmpleadoPorId); // Ruta para obtener empleado por ID
router.put('/:id', empleadoController.actualizarEmpleado);   // Ruta para actualizar empleado
router.delete('/:id', empleadoController.eliminarEmpleado);  // Ruta para eliminar empleado


module.exports = router;
