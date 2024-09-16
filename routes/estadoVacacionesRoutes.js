const express = require('express');
const router = express.Router();
const estadoVacacionController = require('../controllers/estadoVacacionesController');

router.get('/', estadoVacacionController.obtenerEstados);

module.exports = router;