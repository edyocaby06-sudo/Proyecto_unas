const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    nomUser: { type: String, required: true },
    password: { type: String, required: true },
    servicio: { type: String },
    precio: { type: Number }
});

const ModelUser = mongoose.model("usuarios", userSchema);
module.exports = ModelUser;