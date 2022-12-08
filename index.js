const cors = require('cors')// recurso para permitir o acesso por outros servidores
const express = require('express')
const app = express();
const mongoose = require('mongoose')

const DB_CONNECT = require('./db/configDb')

const pokeRoutes = require('./routes/pokeRoutes')
const megaRoutes = require('./routes/megaRoutes')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use('/pokemons', pokeRoutes)
app.use('/mega-evolucao', megaRoutes)

app.get('/', (req, res) => {
    res.status(200).json({message: 'Tudo ok ...'})
})

mongoose.connect(DB_CONNECT)
.then(()=>{
    app.listen(3000, ()=>{
        console.log("Servidor rodando ...")
    })
})
.catch(error =>{
    console.log("Error: ",error)
})



