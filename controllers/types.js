const express = require('express')
const router = express.Router()

const Types = require('../models/Types')
const Pokemon = require('../models/Pokemon')

console.log(Types)

// List all Types
router.get('/', (req, res) => {
  Types.find({}).then(allTypes => {
    console.log(allTypes)
    res.json(allTypes)
  })
})
// List a Types by id
router.get('/id/:id', (req, res) => {
  Types.find({ _id: req.params.id }).then(objectbyID => res.json(objectbyID))
})
// List a single Pokemon with name and sprites by id (pokedexID)
//  logic derived from https://mongoosejs.com/docs/api.html#model_Model.find
router.get('/pokedexID/:id', (req, res) => {
  Pokemon.find({ id: req.params.id }, 'name types').then(objectbyID =>
    res.json(objectbyID)
  )
})
// List Types by name
router.get('/name/:name', (req, res) => {
  Pokemon.find({ name: req.params.name }, 'name types').then(objectByName =>
    res.json(objectByName)
  )
})
// Create a Types set
router.post('/create', (req, res) => {
  let newTypes = req.body
  console.log(newTypes)
  Types.create(newTypes).then(created => {
    res.json(created)
  })
})
// Update a Sprite by id
router.put('/update/:id', (req, res) => {
  Types.findOneAndUpdate({ _id: req.params.id }, req.body).then(updated => {
    res.json(updated)
  })
})
// Delete a Types by id
router.delete('/delete/:id', (req, res) => {
  Types.deleteOne({ _id: req.params.id }).then(deleted => {
    console.log(deleted)
    res.json(deleted)
  })
})

module.exports = router
