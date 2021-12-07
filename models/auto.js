const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const autoSchema = new Schema({
    marca: String,
    linea: String,
    modelo: String,
    potencia: Number,
    cilindraje: Number,
    placa: String
})

const auto = mongoose.model('auto', autoSchema)

module.exports = auto