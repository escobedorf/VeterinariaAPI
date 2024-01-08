const express = require('express');
const router = express.Router();
const facturasController = require('../controllers/facturas.controller');

// Rutas para Facturas

router.get('/', facturasController.getAllFacturas);
router.get('/:idFactura', facturasController.getFacturaById);
router.post('/', facturasController.addFactura);
router.put('/:idFactura', facturasController.updateFactura);
router.delete('/:idFactura', facturasController.deleteFactura);


module.exports = router;