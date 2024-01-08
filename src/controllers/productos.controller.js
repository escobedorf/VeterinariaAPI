const Productos = require('../models/productos.model');

exports.getAllProductos = async (req, res) => {
    try {
        const listadoProductos = await Productos.find();
        if (listadoProductos) {
            res.status(200).json({
                estado: 1,
                mensaje: "Productos encontrados",
                productos: listadoProductos
            });
        } else {
            res.status  (404).json({
                estado: 0,
                mensaje: "Productos no encontrados",
                productos: []
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrió un error desconocido",
            productos: []
        });
    }
};

exports.getProductoById = async (req, res) => {
    try {
        const { idProducto } = req.params;
        const producto = await Productos.findById(idProducto).exec();
        if (producto) {
            res.status(200).json({
                estado: 1,
                mensaje: "Producto encontrado",
                productos: [producto]
            });
        } else {
            res.status(404).json({
                estado: 0,
                mensaje: "Producto no encontrado",
                productos: []
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrió un error desconocido",
            productos: []
        });
    }
};

exports.addProducto = async (req, res) => {
    try {
        const { ID_Item, Cantidad, Precio } = req.body;
        if (ID_Item == undefined || Cantidad == undefined || Precio == undefined) {
            res.status(400).json({
                estado: 0,
                mensaje: "Faltan parámetros",
                productos: []
            });
        } else {
            const nuevoProducto = await Productos.create({ ID_Item, Cantidad, Precio });
            if (nuevoProducto) {
                res.status(200).json({
                    estado: 1,
                    mensaje: "Producto creado con éxito",
                    productos: [nuevoProducto]
                });
            } else {
                res.status(500).json({
                    estado: 0,
                    mensaje: "Ocurrió un error desconocido",
                    productos: []
                });
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrió un error desconocido",
            productos: []
        });
    }
};

exports.updateProducto = async (req, res) => {
    try {
        const { idProducto } = req.params;
        const { ID_Item, Cantidad, Precio } = req.body;
        if (ID_Item == undefined || Cantidad == undefined || Precio == undefined) {
            res.status(400).json({
                estado: 0,
                mensaje: "Faltan parámetros",
                productos: []
            });
        } else {
            await Productos.findByIdAndUpdate(idProducto, { ID_Item, Cantidad, Precio });
            res.status(200).json({
                estado: 1,
                mensaje: "El registro se actualizó correctamente",
                productos: []
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrió un error desconocido",
            productos: []
        });
    }
};

exports.deleteProducto = async (req, res) => {
    try {
        const { idProducto } = req.params;
        const producto = await Productos.findById(idProducto).exec();
        if (producto) {
            await Productos.deleteOne(producto);
            res.status(200).json({
                estado: 1,
                mensaje: "Producto eliminado",
                productos: []
            });
        } else {
            res.status(404).json({
                estado: 0,
                mensaje: "Producto no encontrado",
                productos: []
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrió un error desconocido",
            productos: []
        });
    }
};
