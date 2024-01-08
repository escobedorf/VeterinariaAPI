const ServiciosMedicos = require('../models/servicioMedico.model');

exports.getAllServiciosMedicos = async (req, res) => {
    try {
        const listadoServicios = await ServiciosMedicos.find();
        if (listadoServicios) {
            res.status(200).json({
                estado: 1,
                mensaje: "Servicios médicos encontrados",
                servicios: listadoServicios
            });
        } else {
            res.status(404).json({
                estado: 0,
                mensaje: "Servicios médicos no encontrados",
                servicios: []
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrió un error desconocido",
            servicios: []
        });
    }
};

exports.getServicioMedicoById = async (req, res) => {
    try {
        const { idServicio } = req.params;
        const servicio = await ServiciosMedicos.findById(idServicio).exec();
        if (servicio) {
            res.status(200).json({
                estado: 1,
                mensaje: "Servicio médico encontrado",
                servicios: [servicio]
            });
        } else {
            res.status(404).json({
                estado: 0,
                mensaje: "Servicio médico no encontrado",
                servicios: []
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrió un error desconocido",
            servicios: []
        });
    }
};

exports.addServicioMedico = async (req, res) => {
    try {
        const { Tipo_Servicio, Descripcion, Costo } = req.body;
        if (Tipo_Servicio == undefined || Descripcion == undefined || Costo == undefined) {
            res.status(400).json({
                estado: 0,
                mensaje: "Faltan parámetros",
                servicios: []
            });
        } else {
            const nuevoServicio = await ServiciosMedicos.create({ Tipo_Servicio, Descripcion, Costo });
            if (nuevoServicio) {
                res.status(200).json({
                    estado: 1,
                    mensaje: "Servicio médico creado con éxito",
                    servicios: [nuevoServicio]
                });
            } else {
                res.status(500).json({
                    estado: 0,
                    mensaje: "Ocurrió un error desconocido",
                    servicios: []
                });
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrió un error desconocido",
            servicios: []
        });
    }
};

exports.updateServicioMedico = async (req, res) => {
    try {
        const { idServicio } = req.params;
        const { Tipo_Servicio, Descripcion, Costo } = req.body;
        if (Tipo_Servicio == undefined || Descripcion == undefined || Costo == undefined) {
            res.status(400).json({
                estado: 0,
                mensaje: "Faltan parámetros",
                servicios: []
            });
        } else {
            await ServiciosMedicos.findByIdAndUpdate(idServicio, { Tipo_Servicio, Descripcion, Costo });
            res.status(200).json({
                estado: 1,
                mensaje: "El registro se actualizó correctamente",
                servicios: []
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrió un error desconocido",
            servicios: []
        });
    }
};

exports.deleteServicioMedico = async (req, res) => {
    try {
        const { idServicio } = req.params;
        const servicio = await ServiciosMedicos.findById(idServicio).exec();
        if (servicio) {
            await ServiciosMedicos.deleteOne(servicio);
            res.status(200).json({
                estado: 1,
                mensaje: "Servicio médico eliminado",
                servicios: []
            });
        } else {
            res.status(404).json({
                estado: 0,
                mensaje: "Servicio médico no encontrado",
                servicios: []
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrió un error desconocido",
            servicios: []
        });
    }
};
