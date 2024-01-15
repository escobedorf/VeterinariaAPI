const express = require('express');
const cors = require('cors'); // Importar el módulo CORS

const routsHistorialMedico = require('./src/routes/historialmedico.route');
const routsPaciente = require('./src/routes/paciente.route');
const routsProducto = require('./src/routes/productos.route');
const routsCita = require('./src/routes/citas.route');
const routsServicioMedico = require('./src/routes/servicioMedico.route');
const routsInventario = require('./src/routes/inventario.route');
const routsPagos = require('./src/routes/pago.route');
const routsFacturas = require('./src/routes/facturas.route');
const routsInformesEstadisticos = require('./src/routes/informeEstadistico.route');

const app = express()
const port = process.env.PORT || 3000;

// Middleware CORS para permitir solicitudes desde cualquier origen
app.use(cors());

app.use(express.json());

// Routes for different resources
app.use('/veterinaria/v1/historialmedico', routsHistorialMedico);
app.use('/veterinaria/v1/paciente', routsPaciente);
app.use('/veterinaria/v1/producto', routsProducto);
app.use('/veterinaria/v1/cita', routsCita);
app.use('/veterinaria/v1/serviciomedico', routsServicioMedico);
app.use('/veterinaria/v1/inventario', routsInventario);
app.use('/veterinaria/v1/pago', routsPagos);
app.use('/veterinaria/v1/factura', routsFacturas);
app.use('/veterinaria/v1/informeestaditico', routsInformesEstadisticos);


app.listen(port,()=>{
    console.log("Servidor corriendo en el puerto: ",port);
})
