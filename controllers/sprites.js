const express = require('express')
const router = express.Router()

const Sprites = require('../models/Sprites')
console.log(Sprites)

// // List all shows/people
router.get('/', (req, res) => {
  Sprites.find({}).then(allSprites => {
    console.log(allSprites)
    res.json(allSprites)
  })
})
// // List a single show/Sprites by id
router.get('/:id', (req, res) => {
  Sprites.find({ _id: req.params.id }).then(objectbyID => res.json(objectbyID))
})
// // List a single show/Sprites by name
router.get('/name/:name', (req, res) => {
  Sprites.find({ name: req.params.name }).then(objectByName =>
    res.json(objectByName)
  )
})
// // Create a show/Sprites
router.post('/', (req, res) => {
  let newSprites = req.body
  console.log(newSprites)
  Sprites.create(newSprites).then(created => {
    res.json(created)
  })
})
// Update a single show/Sprites by id
router.put('/update/:id', (req, res) => {
  Sprites.findOneAndUpdate({ _id: req.params.id }, req.body).then(updated => {
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
