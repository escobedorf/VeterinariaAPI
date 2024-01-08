//const { DataTypes } = require('sequelize');
//const sequelize = require('../config/db');
const mongoose = require('../config/db');
//const mongoose = require('mongoose');
const { Schema } = mongoose;

const servicioMedicoSchema = new Schema({
/*     ID_Servicio: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
        unique: true
    }, */
    Tipo_Servicio: {
        type: String,
        //required: true
    },
    Descripcion: {
        type: String,
        default: ''
    },
    Costo: {
        type: Number,
        //required: true
    }
});

const ServicioMedico = mongoose.model('ServicioMedico', servicioMedicoSchema);

module.exports = ServicioMedico;
