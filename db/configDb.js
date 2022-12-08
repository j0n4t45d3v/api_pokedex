require('dotenv').config()

const DB_PASSWORD = process.env.PASSWORD

const DB_CONNECT = `mongodb+srv://Jonatas:${DB_PASSWORD}@clusterpokemon.bacewq0.mongodb.net/?retryWrites=true&w=majority`

module.exports = DB_CONNECT