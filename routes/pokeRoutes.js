const express = require('express')
const router = express.Router()

const Pokemon = require('../model/Pokemon')

// printa pokemons
router.get('/', async(req, res)=>{
    try {
        const pokemons = await Pokemon.find()
        res.status(200).json(pokemons)
    } catch (err) {
        res.status(500).json(err)
    }
})

// printa um pokemon
router.get('/:id', async (req, res)=>{
    const id = req.params.id

    const checkPokemon = await Pokemon.findOne({_id: id}) 

    if(!checkPokemon){
        res.status(500).json({message: 'Pokemon não encontrado ...'})
        return
    }

    try {
        const pokemons = await Pokemon.find({_id: id})
        res.status(200).json(pokemons)
    } catch (err) {
        res.status(500).json(err)
    }
})

// adiciona pokemon
router.post('/', async (req, res)=>{
    const {_id, name, type, description, img} = req.body

    const pokemon = {
        _id,
        name,
        type,
        description,
        img
    }

    const idExiste = await Pokemon.findOne({_id: pokemon._id}) 
    const nameExiste = await Pokemon.findOne({name: pokemon.name})
    const imgExiste = await Pokemon.findOne({img: pokemon.img})

    if( idExiste && nameExiste && imgExiste){
        res.status(500).json({message: 'Pokemon inválido, o id, nome ou imagem ja existe ...'})
        return
    }

    try{
        await Pokemon.create(pokemon)
        res.status(201).json({message: 'Pokemon inserido com sucesso ...'})
    }catch(err){
        res.status(500).json({error:err})
    }
})

// atualiza pokemon
router.patch('/:id', async (req, res) =>{
    const id = req.params.id

    const {_id, name, type, description, img} = req.body

    const pokemon = {
        _id,
        name,
        type,
        description,
        img
    }

    const pokemonCheck = await Pokemon.findOne({_id: id})

    if(!pokemonCheck){
        res.status(500).json({message: 'Pokemon não encontrado ...'})
        return
    }

    try {
        await Pokemon.updateOne({_id: id}, pokemon)
        res.status(200).json({message: 'Pokemon atualizado com sucesso ...'})
    } catch (err) {
        res.status(500).json({error:err})
    }
})

// deleta pokemon
router.delete('/:id', async (req, res) => {
    const id = req.params.id

    const checkPokemon = await Pokemon.findOne({_id: id}) 

    if(!checkPokemon){
        res.status(500).json({message: 'Pokemon não encontrado ...'})
        return
    }

    try{
        await Pokemon.deleteOne({_id: id})
        res.status(200).json({message: 'Pokemon deletado com sucesso ...'})
    } catch (err) {
        res.status(500).json({error:err})
    }
})

module.exports = router