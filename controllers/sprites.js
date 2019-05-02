const express = require('express')
const router = express.Router()

const Sprites = require('../models/Sprites')
const Pokemon = require('../models/Pokemon')
console.log(Sprites)

// List all Sprites
router.get('/', (req, res) => {
  Sprites.find({}).then(allSprites => {
    console.log(allSprites)
    res.json(allSprites)
  })
})
// List a Sprites by _id
router.get('/id/:id', (req, res) => {
  Sprites.find({ _id: req.params.id }).then(objectbyID => res.json(objectbyID))
})
// List a single Pokemon with name and sprites by id (pokedexID)
//  logic derived from https://mongoosejs.com/docs/api.html#model_Model.find
router.get('/pokedexID/:id', (req, res) => {
  Pokemon.find({ id: req.params.id }, 'name sprites').then(objectbyID =>
    res.json(objectbyID)
  )
})

// List Sprites by name
router.get('/name/:name', (req, res) => {
  Pokemon.find({ name: req.params.name }, 'name sprites').then(objectByName =>
    res.json(objectByName)
  )
})
// Create a Sprites
router.post('/', (req, res) => {
  let newSprites = req.body
  console.log(newSprites)
  Sprites.create(newSprites).then(created => {
    res.json(created)
  })
})
// Update a Sprite by id
router.put('/update/:id', (req, res) => {
  Sprites.findOneAndUpdate({ id: req.params.id }, req.body).then(updated => {
    res.json(updated)
  })
})
// Delete a Sprites by id
router.delete('/delete/:id', (req, res) => {
  Sprites.deleteOne({ _id: req.params.id }).then(deleted => {
    console.log(deleted)
    res.json(deleted)
  })
})

module.exports = router
