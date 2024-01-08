const Pacientes = require('../models/paciente.model');

exports.getAllPacientes = async (req, res) => {
    try {
        const listadoPacientes = await Pacientes.find();
        if (listadoPacientes) {
            res.status(200).json({
                estado: 1,
                mensaje: "Pacientes encontrados",
                pacientes: listadoPacientes
            });
        } else {
            res.status  (404).json({
                estado: 0,
                mensaje: "Pacientes no encontrados",
                pacientes: []
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrió un error desconocido",
            pacientes: []
        });
    }
};

exports.getPacienteById = async (req, res) => {
    try {
        const { idPaciente } = req.params;
        const paciente = await Pacientes.findById(idPaciente).exec();
        if (paciente) {
            res.status(200).json({
                estado: 1,
                mensaje: "Paciente encontrado",
                pacientes: [paciente]
            });
        } else {
            res.status(404).json({
                estado: 0,
                mensaje: "Paciente no encontrado",
                pacientes: []
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrió un error desconocido",
            pacientes: []
        });
    }
};

exports.addPaciente = async (req, res) => {
    try {
        const { Nombre, Especie, Raza, Fecha_Nacimiento } = req.body;
        if (Nombre == undefined || Especie == undefined || Raza == undefined || Fecha_Nacimiento == undefined) {
            res.status(400).json({
                estado: 0,
                mensaje: "Faltan parámetros",
                pacientes: []
            });
        } else {
            const nuevoPaciente = await Pacientes.create({ Nombre, Especie, Raza, Fecha_Nacimiento });
            if (nuevoPaciente) {
                res.status(200).json({
                    estado: 1,
                    mensaje: "Paciente creado con éxito",
                    pacientes: [nuevoPaciente]
                });
            } else {
                res.status(500).json({
                    estado: 0,
                    mensaje: "Ocurrió un error desconocido",
                    pacientes: []
                });
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrió un error desconocido",
            pacientes: []
        });
    }
};

exports.updatePaciente = async (req, res) => {
    try {
        const { idPaciente } = req.params;
        const { Nombre, Especie, Raza, Fecha_Nacimiento } = req.body;
        if (Nombre == undefined || Especie == undefined || Raza == undefined || Fecha_Nacimiento == undefined) {
            res.status(400).json({
                estado: 0,
                mensaje: "Faltan parámetros",
                pacientes: []
            });
        } else {
            await Pacientes.findByIdAndUpdate(idPaciente, { Nombre, Especie, Raza, Fecha_Nacimiento });
            res.status(200).json({
                estado: 1,
                mensaje: "El registro se actualizó correctamente",
                pacientes: []
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrió un error desconocido",
            pacientes: []
        });
    }
};

exports.deletePaciente = async (req, res) => {
    try {
        const { idPaciente } = req.params;
        const paciente = await Pacientes.findById(idPaciente).exec();
        if (paciente) {
            await Pacientes.deleteOne(paciente);
            res.status(200).json({
                estado: 1,
                mensaje: "Paciente eliminado",
                pacientes: []
            });
        } else {
            res.status(404).json({
                estado: 0,
                mensaje: "Paciente no encontrado",
                pacientes: []
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrió un error desconocido",
            pacientes: []
        });
    }
};
