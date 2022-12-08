const express = require('express')
const router = express.Router()

const MegaPokemon = require('../model/MegaPokemon')

// printa pokemons mega evoluido
router.get('/', async(req, res)=>{
    try {
        const pokemons = await MegaPokemon.find()
        res.status(200).json(pokemons)
    } catch (err) {
        res.status(500).json(err)
    }
})

// printa um pokemon mega evoluido
router.get('/:id', async (req, res)=>{
    const id = req.params.id

    const checkPokemon = await MegaPokemon.findOne({_id: id}) 

    if(!checkPokemon){
        res.status(500).json({message: 'Mega evolução não encontrada ...'})
        return
    }

    try {
        const pokemons = await MegaPokemon.find({_id: id})
        res.status(200).json(pokemons)
    } catch (err) {
        res.status(500).json(err)
    }
})
 
// adiciona pokemon mega evoluido
router.post('/', async (req, res)=>{
    const {_id, name, type, description, img, idPokemon} = req.body

    const pokemon = {
        _id,
        name,
        type,
        description,
        img,
        idPokemon
    }
     

    const idExiste = await MegaPokemon.findOne({_id: pokemon._id}) 
    const nameExiste = await MegaPokemon.findOne({name: pokemon.name})
    const imgExiste = await MegaPokemon.findOne({img: pokemon.img})

    if( idExiste && nameExiste && imgExiste){
        res.status(500).json({message: 'Mega evolução inválido, o id, nome ou imagem ja existe ...'})
        return
    }

    try{
        await MegaPokemon.create(pokemon)
        res.status(201).json({message: 'Mega evolução inserida com sucesso ...'})
    }catch(err){
        res.status(500).json({error:err})
    }
})

// atualiza pokemon mega evoluido
router.patch('/:id', async (req, res) =>{
    const id = req.params.id

    const {_id, name, type, description, img, idPokemon} = req.body

    const pokemon = {
        _id,
        name,
        type,
        description,
        img,
        idPokemon
    }

    const pokemonCheck = await MegaPokemon.findOne({_id: id})

    if(!pokemonCheck){
        res.status(500).json({message: 'Mega evolução não encontrada ...'})
        return
    }

    try {
        await MegaPokemon.updateOne({_id: id}, pokemon)
        res.status(200).json({message: 'Mega evolução atualizado com sucesso ...'})
    } catch (err) {
        res.status(500).json({error:err})
    }
})

// deleta pokemon mega evoluido
router.delete('/:id', async (req, res) => {
    const id = req.params.id

    const checkPokemon = await MegaPokemon.findOne({_id: id}) 

    if(!checkPokemon){
        res.status(500).json({message: 'Mega evolução não encontrada ...'})
        return
    }

    try{
        await MegaPokemon.deleteOne({_id: id})
        res.status(200).json({message: 'Mega evolução deletado com sucesso ...'})
    } catch (err) {
        res.status(500).json({error:err})
    }
})

module.exports = router