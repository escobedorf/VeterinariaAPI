const express = require('express');
const router = express.Router();
const citasController = require('../controllers/citas.controller');

// Rutas para Citas
router.get('/', citasController.getAllCitas);
router.get('/:idCita', citasController.getCitaById);
router.post('/', citasController.addCita);
router.put('/:idCita', citasController.updateCita);
router.delete('/:idCita', citasController.deleteCita);

module.exports = router;