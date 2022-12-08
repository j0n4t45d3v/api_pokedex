const mongoose = require('mongoose')

const MegaPokemon = mongoose.model('MegaPokemon', {
    _id: Number,
    name: String,
    type: Array,
    description: String,
    img: String,
    idPokemon : Number,
})

module.exports = MegaPokemon