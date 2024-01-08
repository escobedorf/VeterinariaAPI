const Facturas = require('../models/facturas.model');

exports.getAllFacturas = async (req, res) => {
    try {
        const listadoFacturas = await Facturas.find();
        if (listadoFacturas) {
            res.status(200).json({
                estado: 1,
                mensaje: "Facturas encontradas",
                facturas: listadoFacturas
            });
        } else {
            res.status(404).json({
                estado: 0,
                mensaje: "Facturas no encontradas",
                facturas: []
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrió un error desconocido",
            facturas: []
        });
    }
};

exports.getFacturaById = async (req, res) => {
    try {
        const { idFactura } = req.params;
        const factura = await Facturas.findById(idFactura).exec();
        if (factura) {
            res.status(200).json({
                estado: 1,
                mensaje: "Factura encontrada",
                facturas: [factura]
            });
        } else {
            res.status(404).json({
                estado: 0,
                mensaje: "Factura no encontrada",
                facturas: []
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrió un error desconocido",
            facturas: []
        });
    }
};

exports.addFactura = async (req, res) => {
    try {
        const { ID_Cita, ID_Servicio, Monto_Total, Estado_Pago } = req.body;
        if (ID_Cita == undefined || ID_Servicio == undefined || Monto_Total == undefined || Estado_Pago == undefined) {
            res.status(400).json({
                estado: 0,
                mensaje: "Faltan parámetros",
                facturas: []
            });
        } else {
            const nuevaFactura = await Facturas.create({ ID_Cita, ID_Servicio, Monto_Total, Estado_Pago });
            if (nuevaFactura) {
                res.status(200).json({
                    estado: 1,
                    mensaje: "Factura creada con éxito",
                    facturas: [nuevaFactura]
                });
            } else {
                res.status(500).json({
                    estado: 0,
                    mensaje: "Ocurrió un error desconocido",
                    facturas: []
                });
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrió un error desconocido",
            facturas: []
        });
    }
};

exports.updateFactura = async (req, res) => {
    try {
        const { idFactura } = req.params;
        const { ID_Cita, ID_Servicio, Monto_Total, Estado_Pago } = req.body;
        if (ID_Cita == undefined || ID_Servicio == undefined || Monto_Total == undefined || Estado_Pago == undefined) {
            res.status(400).json({
                estado: 0,
                mensaje: "Faltan parámetros",
                facturas: []
            });
        } else {
            await Facturas.findByIdAndUpdate(idFactura, { ID_Cita, ID_Servicio, Monto_Total, Estado_Pago });
            res.status(200).json({
                estado: 1,
                mensaje: "El registro se actualizó correctamente",
                facturas: []
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrió un error desconocido",
            facturas: []
        });
    }
};

exports.deleteFactura = async (req, res) => {
    try {
        const { idFactura } = req.params;
        const factura = await Facturas.findById(idFactura).exec();
        if (factura) {
            await Facturas.deleteOne(factura);
            res.status(200).json({
                estado: 1,
                mensaje: "Factura eliminada",
                facturas: []
            });
        } else {
            res.status(404).json({
                estado: 0,
                mensaje: "Factura no encontrada",
                facturas: []
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrió un error desconocido",
            facturas: []
        });
    }
};