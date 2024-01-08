const express = require('express');
const router = express.Router();
const pagoController = require('../controllers/pagos.controller');

// Rutas para Pago
router.get('/', pagoController.getAllPagos);
router.get('/:idPago', pagoController.getPagoById);
router.post('/', pagoController.addPago);
router.put('/:idPago', pagoController.updatePago);
router.delete('/:idPago', pagoController.deletePago);


module.exports = router;