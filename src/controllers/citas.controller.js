const Cita = require('../models/citas.model');

// Obtener todas las citas
exports.getAllCitas = async (req, res) => {
    try {
        const listadoCitas = await Cita.find();
        if (listadoCitas) {
            res.status(200).json({
                estado: 1,
                mensaje: "Citas encontradas",
                citas: listadoCitas
            });
        } else {
            res.status(404).json({
                estado: 0,
                mensaje: "Citas no encontradas",
                citas: []
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrió un error desconocido",
            citas: []
        });
    }
};

// Obtener una cita por ID
exports.getCitaById = async (req, res) => {
    try {
        const { idCita } = req.params;
        const cita = await Cita.findById(idCita).exec();
        if (cita) {
            res.status(200).json({
                estado: 1,
                mensaje: "Cita encontrada",
                cita: [cita]
            });
        } else {
            res.status(404).json({
                estado: 0,
                mensaje: "Cita no encontrada",
                cita: []
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrió un error desconocido",
            cita: []
        });
    }
};

// Agregar una nueva cita
exports.addCita = async (req, res) => {
    try {
        const { ID_Paciente, Fecha_Hora, Descripcion } = req.body;
        if (ID_Paciente == undefined || Fecha_Hora == undefined || Descripcion == undefined) {
            res.status(400).json({
                estado: 0,
                mensaje: "Faltan parámetros"
            });
        } else {
            const nuevaCita = await Cita.create({ ID_Paciente, Fecha_Hora, Descripcion });
            if (nuevaCita) {
                res.status(200).json({
                    estado: 1,
                    mensaje: "Cita creada con éxito",
                    cita: nuevaCita
                });
            } else {
                res.status(500).json({
                    estado: 0,
                    mensaje: "Ocurrió un error desconocido"
                });
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrió un error desconocido"
        });
    }
};

// Actualizar una cita por ID
exports.updateCita = async (req, res) => {
    try {
        const { idCita } = req.params;
        const { ID_Paciente, Fecha_Hora, Descripcion } = req.body;
        if (ID_Paciente == undefined || Fecha_Hora == undefined || Descripcion == undefined) {
            res.status(400).json({
                estado: 0,
                mensaje: "Faltan parámetros"
            });
        } else {
            await Cita.findByIdAndUpdate(idCita, { ID_Paciente, Fecha_Hora, Descripcion });
            res.status(200).json({
                estado: 1,
                mensaje: "El registro se actualizó correctamente",
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrió un error desconocido"
        });
    }
};

// Eliminar una cita por ID
exports.deleteCita = async (req, res) => {
    try {
        const { idCita } = req.params;
        const cita = await Cita.findById(idCita).exec();
        if (cita) {
            await Cita.deleteOne(cita);
            res.status(200).json({
                estado: 1,
                mensaje: "Cita eliminada",
                citas: []
            });
        } else {
            res.status(404).json({
                estado: 0,
                mensaje: "Cita no encontrada",
                citas: []
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrió un error desconocido",
            citas: []
        });
    }
};
