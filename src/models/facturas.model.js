//const { DataTypes } = require('sequelize');
//const sequelize = require('../config/db');
const mongoose = require('../config/db');
//const mongoose = require('mongoose');
const { Schema } = mongoose;

const facturaSchema = new Schema({
   ID_Factura: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
        unique: true
    },
    ID_Cita: {
        type: Number,
        //required: true
    },
    ID_Servicio: {
        type: Number,
        //required: true
    },
    Monto_Total: {
        type: Number,
        //required: true
    },
    Estado_Pago: {
        type: String,
        //required: true
    }
});

const Factura = mongoose.model('Factura', facturaSchema);

module.exports = Factura;
