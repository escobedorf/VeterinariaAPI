//const { DataTypes } = require('sequelize');
//const sequelize = require('../config/db');
const mongoose = require('../config/db');
//const mongoose = require('mongoose');
const { Schema } = mongoose;

const productoSchema = new Schema({
/*     ID_Servicio: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
        unique: true
    }, */
    ID_Item: {
        type: Number,
        //required: true
    },
    Cantidad: {
        type: String,
        //required: true
    },
    Precio: {
        type: Number,
        //required: true
    }
});

const Producto = mongoose.model('Producto', productoSchema);

module.exports = Producto;
