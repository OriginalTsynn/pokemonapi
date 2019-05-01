const mongoose = require('./connection')

// @ts-ignore
const bulbasaur = require('./bulbasaur.json')

const Pokemon = require('../models/Pokemon')
const Stats = require('../models/Stats')
const Types = require('../models/Types')
const Sprites = require('../models/Sprites')

Pokemon.deleteMany({}).then(() => {
  Pokemon.create(bulbasaur)
    .then(newPokemon => {
      console.log(newPokemon)
    })
    .catch(err => {
      console.log(err)
    })
})

Stats.deleteMany({}).then(() => {
  Stats.create(bulbasaur)
    .then(newStats => {
      console.log(newStats)
    })
    .catch(err => {
      console.log(err)
    })
})

Types.deleteMany({}).then(() => {
  Types.create(bulbasaur)
    .then(newTypes => {
      console.log(newTypes)
    })
    .catch(err => {
      console.log(err)
    })
})

Sprites.deleteMany({}).then(() => {
  Sprites.create(bulbasaur)
    .then(newSprites => {
      console.log(newSprites)
    })
    .catch(err => {
      console.log(err)
    })
})
