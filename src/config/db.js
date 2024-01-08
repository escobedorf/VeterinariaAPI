const mongoose = require('mongoose');
//const uriLocal = "mongodb://127.0.0.1:27017/tienda";
const uriRemota = "mongodb+srv://escobedorf:Escobedo2001.@clusterfjer.360d6lx.mongodb.net/?retryWrites=true&w=majority"
//const uriRemota = "mongodb+srv://norapatricianoris:noramongo1@cluster0-npva.pris9ma.mongodb.net"
mongoose.connect(uriRemota)
const db = mongoose.connection

module.exports=mongoose;
