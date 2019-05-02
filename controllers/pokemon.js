const express = require('express')
const router = express.Router()

const Pokemon = require('../models/Pokemon')
console.log(Pokemon)

// // List all shows/people
router.get('/', (req, res) => {
  Pokemon.find({}).then(allPokemons => {
    console.log(allPokemons)
    res.json(allPokemons)
  })
})
// // List a single show/Pokemon by id
router.get('/:id', (req, res) => {
  Pokemon.find({ _id: req.params.id }).then(objectbyID => res.json(objectbyID))
})
// // List a single show/Pokemon by name
router.get('/name/:name', (req, res) => {
  Pokemon.find({ name: req.params.name }).then(objectByName =>
    res.json(objectByName)
  )
})
// // Create a show/Pokemon
router.post('/', (req, res) => {
  let newPokemon = req.body
  console.log(newPokemon)
  Pokemon.create(newPokemon).then(created => {
    res.json(created)
  })
})
// Update a single show/Pokemon by id
router.put('/update/:id', (req, res) => {
  Pokemon.findOneAndUpdate({ _id: req.params.id }, req.body).then(updated => {
    res.json(updated)
  })
})
// Delete a Pokemon by id
router.delete('/delete/:id', (req, res) => {
  Pokemon.deleteOne({ _id: req.params.id }).then(deleted => {
    console.log(deleted)
    res.json(deleted)
  })
})

module.exports = router
