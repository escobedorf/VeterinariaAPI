const InformesEstadisticos = require('../models/informeEstadistico.model');

exports.getAllInformesEstadisticos = async (req, res) => {
    try {
        const listadoInformes = await InformesEstadisticos.find();
        if (listadoInformes) {
            res.status(200).json({
                estado: 1,
                mensaje: "Informes Estadísticos encontrados",
                informesEstadisticos: listadoInformes
            });
        } else {
            res.status  (404).json({
                estado: 0,
                mensaje: "Informes Estadísticos no encontrados",
                informesEstadisticos: []
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrió un error desconocido",
            informesEstadisticos: []
        });
    }
};

exports.getInformeEstadisticoById = async (req, res) => {
    try {
        const { idInforme } = req.params;
        const informeEstadistico = await InformesEstadisticos.findById(idInforme).exec();
        if (informeEstadistico) {
            res.status(200).json({
                estado: 1,
                mensaje: "Informe Estadístico encontrado",
                informesEstadisticos: [informeEstadistico]
            });
        } else {
            res.status(404).json({
                estado: 0,
                mensaje: "Informe Estadístico no encontrado",
                informesEstadisticos: []
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrió un error desconocido",
            informesEstadisticos: []
        });
    }
};

exports.addInformeEstadistico = async (req, res) => {
    try {
        const { Tipo_Informe, Detalles, Fecha_Generacion } = req.body;
        if (Tipo_Informe == undefined || Detalles == undefined || Fecha_Generacion == undefined) {
            res.status(400).json({
                estado: 0,
                mensaje: "Faltan parámetros",
                informesEstadisticos: []
            });
        } else {
            const nuevoInformeEstadistico = await InformesEstadisticos.create({ Tipo_Informe, Detalles, Fecha_Generacion });
            if (nuevoInformeEstadistico) {
                res.status(200).json({
                    estado: 1,
                    mensaje: "Informe Estadístico creado con éxito",
                    informesEstadisticos: [nuevoInformeEstadistico]
                });
            } else {
                res.status(500).json({
                    estado: 0,
                    mensaje: "Ocurrió un error desconocido",
                    informesEstadisticos: []
                });
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrió un error desconocido",
            informesEstadisticos: []
        });
    }
};

exports.updateInformeEstadistico = async (req, res) => {
    try {
        const { idInforme } = req.params;
        const { Tipo_Informe, Detalles, Fecha_Generacion } = req.body;
        if (Tipo_Informe == undefined || Detalles == undefined || Fecha_Generacion == undefined) {
            res.status(400).json({
                estado: 0,
                mensaje: "Faltan parámetros",
                informesEstadisticos: []
            });
        } else {
            await InformesEstadisticos.findByIdAndUpdate(idInforme, { Tipo_Informe, Detalles, Fecha_Generacion });
            res.status(200).json({
                estado: 1,
                mensaje: "El registro se actualizó correctamente",
                informesEstadisticos: []
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrió un error desconocido",
            informesEstadisticos: []
        });
    }
};

exports.deleteInformeEstadistico = async (req, res) => {
    try {
        const { idInforme } = req.params;
        const informeEstadistico = await InformesEstadisticos.findById(idInforme).exec();
        if (informeEstadistico) {
            await InformesEstadisticos.deleteOne(informeEstadistico);
            res.status(200).json({
                estado: 1,
                mensaje: "Informe Estadístico eliminado",
                informesEstadisticos: []
            });
        } else {
            res.status(404).json({
                estado: 0,
                mensaje: "Informe Estadístico no encontrado",
                informesEstadisticos: []
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrió un error desconocido",
            informesEstadisticos: []
        });
    }
};
