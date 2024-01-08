//const { DataTypes } = require('sequelize');
//const sequelize = require('../config/db');
const mongoose = require('../config/db');
//const mongoose = require('mongoose');
const { Schema } = mongoose;

const informeEstadisticoSchema = new Schema({
/*     ID_Informe: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
        unique: true
    }, */
    Tipo_Informe: {
        type: String,
        //required: true
    },
    Detalles: {
        type: String
    },
    Fecha_Generacion: {
        type: Date,
        //required: true
    }
});

const InformeEstadistico = mongoose.model('InformeEstadistico', informeEstadisticoSchema);

module.exports = InformeEstadistico;