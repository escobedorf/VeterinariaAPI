const express = require('express');
const router = express.Router();
const servicioMedicoController = require('../controllers/servicioMedico.controller');

// Rutas para Servicio Médico
router.get('/', servicioMedicoController.getAllServiciosMedicos);
router.get('/:idServicio', servicioMedicoController.getServicioMedicoById);
router.post('/', servicioMedicoController.addServicioMedico);
router.put('/:idServicio', servicioMedicoController.updateServicioMedico);
router.delete('/:idServicio', servicioMedicoController.deleteServicioMedico);

module.exports = router;