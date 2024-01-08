const Inventario = require('../models/inventario.model');

exports.getAllInventario = async (req, res) => {
    try {
        const listadoItems = await Inventario.find();
        if (listadoItems) {
            res.status(200).json({
                estado: 1,
                mensaje: "Items de Inventario encontrados",
                inventario: listadoItems
            });
        } else {
            res.status(404).json({
                estado: 0,
                mensaje: "Items de Inventario no encontrados",
                inventario: []
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrió un error desconocido",
            inventario: []
        });
    }
};

exports.getInventarioById = async (req, res) => {
    try {
        const { idItem } = req.params;
        const item = await Inventario.findById(idItem).exec();
        if (item) {
            res.status(200).json({
                estado: 1,
                mensaje: "Item de Inventario encontrado",
                inventario: [item]
            });
        } else {
            res.status(404).json({
                estado: 0,
                mensaje: "Item de Inventario no encontrado",
                inventario: []
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrió un error desconocido",
            inventario: []
        });
    }
};

exports.addInventario = async (req, res) => {
    try {
        const { Nombre_Articulo, Cantidad_Disponible, Umbral_Alerta } = req.body;
        if (Nombre_Articulo == undefined || Cantidad_Disponible == undefined || Umbral_Alerta == undefined) {
            res.status(400).json({
                estado: 0,
                mensaje: "Faltan parámetros",
                inventario: []
            });
        } else {
            const nuevoItem = await Inventario.create({ Nombre_Articulo, Cantidad_Disponible, Umbral_Alerta });
            if (nuevoItem) {
                res.status(200).json({
                    estado: 1,
                    mensaje: "Item de Inventario creado con éxito",
                    inventario: [nuevoItem]
                });
            } else {
                res.status(500).json({
                    estado: 0,
                    mensaje: "Ocurrió un error desconocido",
                    inventario: []
                });
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrió un error desconocido",
            inventario: []
        });
    }
};

exports.updateInventario = async (req, res) => {
    try {
        const { idItem } = req.params;
        const { Nombre_Articulo, Cantidad_Disponible, Umbral_Alerta } = req.body;
        if (Nombre_Articulo == undefined || Cantidad_Disponible == undefined || Umbral_Alerta == undefined) {
            res.status(400).json({
                estado: 0,
                mensaje: "Faltan parámetros",
                inventario: []
            });
        } else {
            await Inventario.findByIdAndUpdate(idItem, { Nombre_Articulo, Cantidad_Disponible, Umbral_Alerta });
            res.status(200).json({
                estado: 1,
                mensaje: "El registro se actualizó correctamente",
                inventario: []
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrió un error desconocido",
            inventario: []
        });
    }
};

exports.deleteInventario = async (req, res) => {
    try {
        const { idItem } = req.params;
        const item = await Inventario.findById(idItem).exec();
        if (item) {
            await Inventario.deleteOne(item);
            res.status(200).json({
                estado: 1,
                mensaje: "Item de Inventario eliminado",
                inventario: []
            });
        } else {
            res.status(404).json({
                estado: 0,
                mensaje: "Item de Inventario no encontrado",
                inventario: []
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrió un error desconocido",
            inventario: []
        });
    }
};
