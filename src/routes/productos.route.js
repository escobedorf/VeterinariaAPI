const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productos.controller');

// Rutas para Producto
router.get('/', productoController.getAllProductos);
router.get('/:idProducto', productoController.getProductoById);
router.post('/', productoController.addProducto);
router.put('/:idProducto', productoController.updateProducto);
router.delete('/:idProducto', productoController.deleteProducto);


module.exports = router;
