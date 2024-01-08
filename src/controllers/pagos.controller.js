const Pagos = require('../models/pagos.model');

exports.getAllPagos = async (req, res) => {
    try {
        const listadoPagos = await Pagos.find();
        if (listadoPagos) {
            res.status(200).json({
                estado: 1,
                mensaje: "Pagos encontrados",
                pagos: listadoPagos
            });
        } else {
            res.status(404).json({
                estado: 0,
                mensaje: "Pagos no encontrados",
                pagos: []
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrió un error desconocido",
            pagos: []
        });
    }
};

exports.getPagoById = async (req, res) => {
    try {
        const { idPago } = req.params;
        const pago = await Pagos.findById(idPago).exec();
        if (pago) {
            res.status(200).json({
                estado: 1,
                mensaje: "Pago encontrado",
                pagos: [pago]
            });
        } else {
            res.status(404).json({
                estado: 0,
                mensaje: "Pago no encontrado",
                pagos: []
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrió un error desconocido",
            pagos: []
        });
    }
};

exports.addPago = async (req, res) => {
    try {
        const { ID_Factura, Fecha_Pago, Monto_Pagado } = req.body;
        if (ID_Factura == undefined || Fecha_Pago == undefined || Monto_Pagado == undefined) {
            res.status(400).json({
                estado: 0,
                mensaje: "Faltan parámetros",
                pagos: []
            });
        } else {
            const nuevoPago = await Pagos.create({ ID_Factura, Fecha_Pago, Monto_Pagado });
            if (nuevoPago) {
                res.status(200).json({
                    estado: 1,
                    mensaje: "Pago creado con éxito",
                    pagos: [nuevoPago]
                });
            } else {
                res.status(500).json({
                    estado: 0,
                    mensaje: "Ocurrió un error desconocido",
                    pagos: []
                });
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrió un error desconocido",
            pagos: []
        });
    }
};

exports.updatePago = async (req, res) => {
    try {
        const { idPago } = req.params;
        const { ID_Factura, Fecha_Pago, Monto_Pagado } = req.body;
        if (ID_Factura == undefined || Fecha_Pago == undefined || Monto_Pagado == undefined) {
            res.status(400).json({
                estado: 0,
                mensaje: "Faltan parámetros",
                pagos: []
            });
        } else {
            await Pagos.findByIdAndUpdate(idPago, { ID_Factura, Fecha_Pago, Monto_Pagado });
            res.status(200).json({
                estado: 1,
                mensaje: "El registro se actualizó correctamente",
                pagos: []
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrió un error desconocido",
            pagos: []
        });
    }
};

exports.deletePago = async (req, res) => {
    try {
        const { idPago } = req.params;
        const pago = await Pagos.findById(idPago).exec();
        if (pago) {
            await Pagos.deleteOne(pago);
            res.status(200).json({
                estado: 1,
                mensaje: "Pago eliminado",
                pagos: []
            });
        } else {
            res.status(404).json({
                estado: 0,
                mensaje: "Pago no encontrado",
                pagos: []
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrió un error desconocido",
            pagos: []
        });
    }
};
