// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/db');
const mongoose = require('../config/db');
//const mongoose = require('mongoose');
const { Schema } = mongoose;

const citaSchema = new Schema({
/*     ID_Cita: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
        unique: true
    }, */
    ID_Paciente: {
        type: Number,
        //required: true
    },
    Fecha_Hora: {
        type: Date,
        //required: true
    },
    Descripcion: {
        type: String,
        //required: false
    }
});

const Cita = mongoose.model('Cita', citaSchema);

module.exports = Cita;
