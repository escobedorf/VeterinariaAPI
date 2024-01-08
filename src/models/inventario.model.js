//const { DataTypes } = require('sequelize');
//const sequelize = require('../config/db');
const mongoose = require('../config/db');
//const mongoose = require('mongoose');
const { Schema } = mongoose;

const inventarioSchema = new Schema({
/*     ID_Item: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
        unique: true
    }, */
    Nombre_Articulo: {
        type: String,
        //required: true
    },
    Cantidad_Disponible: {
        type: Number,
        //required: true
    },
    Umbral_Alerta: {
        type: Number,
        //required: true
    }
});

const Inventario = mongoose.model('Inventario', inventarioSchema);

module.exports = Inventario;

