const express = require('express');
const router = express.Router();
const vacacionController = require('../controllers/vacacionesController');

router.get('/', vacacionController.obtenerVacaciones);
router.post('/', vacacionController.crearVacacion);
router.get('/:id', vacacionController.obtenerVacacionPorId);
router.put('/:id', vacacionController.actualizarVacacion);
router.delete('/:id', vacacionController.eliminarVacacion);

module.exports = router;
