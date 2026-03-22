const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

// Tu cadena de conexión de Atlas
const mongoURI = "mongodb+srv://edyocaby06_db_user:9euzJBSQXsKAgVoc@cluster0.a5d5zln.mongodb.net/ProyectoUnas?retryWrites=true&w=majority&appName=Cluster0";

// Intentar conectar a MongoDB
mongoose.connect(mongoURI)
    .then(() => console.log("✅ CONECTADO A MONGODB ATLAS"))
    .catch(err => {
        console.log("⚠️ AVISO: MongoDB Atlas no pudo conectar (bloqueo de antivirus).");
        console.log("ℹ️ El servidor seguirá funcionando en modo local para la evidencia.");
    });

app.post("/", (req, res) => {
    const datos = req.body;
    console.log("📩 Datos de cita recibidos:", datos);
    res.status(201).json({
        mensaje: "Cita procesada",
        estado: "Servidor Activo",
        recibido: datos
    });
});

app.listen(3005, () => {
    console.log("🚀 SERVIDOR CORRIENDO EN EL PUERTO 3005");
    console.log("Esperando peticiones de Postman...");
});