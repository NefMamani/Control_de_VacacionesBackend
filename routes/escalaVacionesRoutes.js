const express = require('express');
const router = express.Router();
const escalaVacaciones  = require('../controllers/escalaVacacionesController');

router.get('/', escalaVacaciones.obtenerEscalas);

module.exports = router;