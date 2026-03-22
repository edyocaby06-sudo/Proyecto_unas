const mongoose = require("mongoose");

const dbconnect = async () => {
    try {
        // Aquí le decimos a dónde conectarse (tu base de datos local)
        await mongoose.connect("mongodb://127.0.0.1:27017/spa_unas_db");
        console.log("✅ Conectado a MongoDB");
    } catch (err) {
        console.log("❌ Error de conexión", err);
    }
};

module.exports = dbconnect;