const express = require('express');
const router = express.Router();
const cors = require('cors'); // Importar el módulo CORS
const citasController = require('../controllers/citas.controller');

// Configurar CORS solo para este router
router.use(cors());


// Rutas para Citas
router.get('/', citasController.getAllCitas);
router.get('/:idCita', citasController.getCitaById);
router.post('/', citasController.addCita);
router.put('/:idCita', citasController.updateCita);
router.delete('/:idCita', citasController.deleteCita);

module.exports = router;