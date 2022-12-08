const mongoose = require('mongoose')

const Pokemon = mongoose.model('Pokemon', {
    _id: Number,
    name: String,
    type: Array,
    description: String,
    img: String,
})

module.exports = Pokemon