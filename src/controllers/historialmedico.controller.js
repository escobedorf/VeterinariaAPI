const HistorialesMedicos = require('../models/historialMedico.model');

exports.getAllHistorialesMedicos = async (req, res) => {
    try {
        const listadoHistorialesMedicos = await HistorialesMedicos.find();
        if (listadoHistorialesMedicos) {
            res.status(200).json({
                estado: 1,
                mensaje: "Historiales Médicos encontrados",
                historialesMedicos: listadoHistorialesMedicos
            });
        } else {
            res.status(404).json({
                estado: 0,
                mensaje: "Historiales Médicos no encontrados",
                historialesMedicos: []
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrió un error desconocido",
            historialesMedicos: []
        });
    }
};

exports.getHistorialMedicoById = async (req, res) => {
    try {
        const { idHistorial } = req.params;
        const historialMedico = await HistorialesMedicos.findById(idHistorial).exec();
        if (historialMedico) {
            res.status(200).json({
                estado: 1,
                mensaje: "Historial Médico encontrado",
                historialesMedicos: [historialMedico]
            });
        } else {
            res.status(404).json({
                estado: 0,
                mensaje: "Historial Médico no encontrado",
                historialesMedicos: []
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrió un error desconocido",
            historialesMedicos: []
        });
    }
};

exports.addHistorialMedico = async (req, res) => {
    try {
        const { ID_Paciente, Vacunas, Tratamientos, Procedimientos_Anteriores } = req.body;
        if (ID_Paciente == undefined || Vacunas == undefined || Tratamientos == undefined || Procedimientos_Anteriores == undefined) {
            res.status(400).json({
                estado: 0,
                mensaje: "Faltan parámetros",
                historialesMedicos: []
            });
        } else {
            const nuevoHistorialMedico = await HistorialesMedicos.create({ ID_Paciente, Vacunas, Tratamientos, Procedimientos_Anteriores });
            if (nuevoHistorialMedico) {
                res.status(200).json({
                    estado: 1,
                    mensaje: "Historial Médico creado con éxito",
                    historialesMedicos: [nuevoHistorialMedico]
                });
            } else {
                res.status(500).json({
                    estado: 0,
                    mensaje: "Ocurrió un error desconocido",
                    historialesMedicos: []
                });
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrió un error desconocido",
            historialesMedicos: []
        });
    }
};

exports.updateHistorialMedico = async (req, res) => {
    try {
        const { idHistorial } = req.params;
        const { ID_Paciente, Vacunas, Tratamientos, Procedimientos_Anteriores } = req.body;
        if (ID_Paciente == undefined || Vacunas == undefined || Tratamientos == undefined || Procedimientos_Anteriores == undefined) {
            res.status(400).json({
                estado: 0,
                mensaje: "Faltan parámetros",
                historialesMedicos: []
            });
        } else {
            await HistorialesMedicos.findByIdAndUpdate(idHistorial, { ID_Paciente, Vacunas, Tratamientos, Procedimientos_Anteriores });
            res.status(200).json({
                estado: 1,
                mensaje: "El registro se actualizó correctamente",
                historialesMedicos: []
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrió un error desconocido",
            historialesMedicos: []
        });
    }
};

exports.deleteHistorialMedico = async (req, res) => {
    try {
        const { idHistorial } = req.params;
        const historialMedico = await HistorialesMedicos.findById(idHistorial).exec();
        if (historialMedico) {
            await HistorialesMedicos.deleteOne(historialMedico);
            res.status(200).json({
                estado: 1,
                mensaje: "Historial Médico eliminado",
                historialesMedicos: []
            });
        } else {
            res.status(404).json({
                estado: 0,
                mensaje: "Historial Médico no encontrado",
                historialesMedicos: []
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrió un error desconocido",
            historialesMedicos: []
        });
    }
};
