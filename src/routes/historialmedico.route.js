const express = require('express');
const router = express.Router();
const historialMedicoController = require('../controllers/historialmedico.controller');

// Rutas para Historiales Médicos
router.get('/', historialMedicoController.getAllHistorialesMedicos);
router.get('/:idHistorial', historialMedicoController.getHistorialMedicoById);
router.post('/', historialMedicoController.addHistorialMedico);
router.put('/:idHistorial', historialMedicoController.updateHistorialMedico);
router.delete('/:idHistorial', historialMedicoController.deleteHistorialMedico);


module.exports = router;