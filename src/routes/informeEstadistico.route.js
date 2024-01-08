const express = require('express');
const router = express.Router();
const informeEstadisticoController = require('../controllers/informeEstadistico.controller');

// Rutas para Informes Estadísticos
router.get('/', informeEstadisticoController.getAllInformesEstadisticos);
router.get('/:idInforme', informeEstadisticoController.getInformeEstadisticoById);
router.post('/', informeEstadisticoController.addInformeEstadistico);
router.put('/:idInforme', informeEstadisticoController.updateInformeEstadistico);
router.delete('/:idInforme', informeEstadisticoController.deleteInformeEstadistico);


module.exports = router;