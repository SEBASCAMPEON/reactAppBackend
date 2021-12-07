const mongoose = require('mongoose')
const Shema = mongoose.schema

const cityShema = new Shema({
    nombre: String,
    departamento: String
})

const city = mongoose.model('auto', cityShema)

module.exports = city