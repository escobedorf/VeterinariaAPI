//const { DataTypes } = require('sequelize');
//const sequelize = require('../config/db');
const mongoose = require('../config/db');
//const mongoose = require('mongoose');
const { Schema } = mongoose;

const pagoSchema = new Schema({
/*     ID_Pago: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
        unique: true
    }, */
    ID_Factura: {
        type: Number,
        //required: true
    },
    Fecha_Pago: {
        type: Date,
        //required: true
    },
    Monto_Pagado: {
        type: Number,
        //required: true
    }
});

const Pago = mongoose.model('Pago', pagoSchema);

module.exports = Pago;
