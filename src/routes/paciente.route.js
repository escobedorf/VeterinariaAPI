const express = require('express');
const router = express.Router();
const cors = require('cors'); // Importar el módulo CORS
const pacienteController = require('../controllers/paciente.controller');

// Configurar CORS solo para este router
router.use(cors());


// Rutas para Pacientes
router.get('/', pacienteController.getAllPacientes);
router.get('/:idPaciente', pacienteController.getPacienteById);
router.post('/', pacienteController.addPaciente);
router.put('/:idPaciente', pacienteController.updatePaciente);
router.delete('/:idPaciente', pacienteController.deletePaciente);


module.exports = router;
