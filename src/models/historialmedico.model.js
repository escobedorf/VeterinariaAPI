//const { DataTypes } = require('sequelize');
//const mongoose = require('mongoose');
//const sequelize = require('../config/db');
const mongoose = require('../config/db');
const { Schema } = mongoose

const historialMedicoSchema = new Schema({
    ID_Historial: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
        unique: true
    },
    ID_Paciente: {
        type: Number,  // Adjust the type as needed for your use case
        //required: true,
    },
    Vacunas: {
        type: String,
        default: '',
    },
    Tratamiento: {
        type: String,
        default: '',
    },
    Procedimientos_Anteriores: {
        type: String,
        default: '',
    },
});

const HistorialMedico = mongoose.model('HistorialMedico', historialMedicoSchema);

module.exports = HistorialMedico;
