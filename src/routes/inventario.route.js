const express = require('express');
const router = express.Router();
const inventarioController = require('../controllers/inventario.controller');

// Rutas para Elementos del Inventario
router.get('/', inventarioController.getAllInventario);
router.get('/:idItem', inventarioController.getInventarioById);
router.post('/', inventarioController.addInventario);
router.put('/:idItem', inventarioController.updateInventario);
router.delete('/:idItem', inventarioController.deleteInventario);


module.exports = router;