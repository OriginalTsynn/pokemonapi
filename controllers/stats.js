const express = require('express')
const router = express.Router()

const Stats = require('../models/Stats')
const Pokemon = require('../models/Pokemon')

// List all Stats
router.get('/', (req, res) => {
  Stats.find({}).then(allStats => {
    console.log(allStats)
    res.json(allStats)
  })
})
// List a Stats by id
router.get('/id/:id', (req, res) => {
  Stats.find({ _id: req.params.id }).then(objectbyID => res.json(objectbyID))
})
// List a single Pokemon with name and sprites by id (pokedexID)
//  logic derived from https://mongoosejs.com/docs/api.html#model_Model.find
router.get('/pokedexID/:id', (req, res) => {
  Pokemon.find({ id: req.params.id }, 'name stats').then(objectbyID =>
    res.json(objectbyID)
  )
})
// List Stats by name
router.get('/name/:name', (req, res) => {
  Pokemon.find({ name: req.params.name }, 'name stats').then(objectByName =>
    res.json(objectByName)
  )
})
// Create a Stats
router.post('/create', (req, res) => {
  let newStats = req.body
  console.log(newStats)
  Stats.create(newStats).then(created => {
    res.json(created)
  })
})
// Update Stats by id
router.put('/update/:id', (req, res) => {
  Stats.findOneAndUpdate({ _id: req.params.id }, req.body).then(updated => {
    res.json(updated)
  })
})
// Delete Stats by id
router.delete('/delete/:id', (req, res) => {
  Stats.deleteOne({ _id: req.params.id }).then(deleted => {
    console.log(deleted)
    res.json(deleted)
  })
})

module.exports = router
