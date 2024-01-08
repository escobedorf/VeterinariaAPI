//const { DataTypes } = require('sequelize');
//const sequelize = require('../config/db');
const mongoose = require('../config/db');
//const mongoose = require('mongoose');
const { Schema } = mongoose;

const pacienteSchema = new Schema({
/*     ID_Paciente: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
        unique: true
    }, */
    Nombre: {
        type: String,
        //required: true
    },
    Especie: {
        type: String,
        //required: true
    },
    Raza: {
        type: String,
        //required: true
    },
    Fecha_Nacimiento: {
        type: Date,
        //required: true
    }
});

const Paciente = mongoose.model('Paciente', pacienteSchema);

module.exports = Paciente;
