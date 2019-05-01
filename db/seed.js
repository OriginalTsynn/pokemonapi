const mongoose = require('./connection')

const Pokemon = require('./models/Pokemon')
const Stats = require('./models/Stats')
const Types = require('./models/Types')
const Sprites = require('./models/Sprites')

Pokemon.deleteMany({}).then(() => {
  Pokemon.create(Pokemon)
    .then(newPokemon => {
      console.log(newPokemon)
    })
    .catch(err => {
      console.log(err)
    })
})

Stats.deleteMany({}).then(() => {
  Stats.create(Stats)
    .then(newStats => {
      console.log(newStats)
    })
    .catch(err => {
      console.log(err)
    })
})

Types.deleteMany({}).then(() => {
  Types.create(Types)
    .then(newTypes => {
      console.log(newTypes)
    })
    .catch(err => {
      console.log(err)
    })
})

Sprites.deleteMany({}).then(() => {
  Sprites.create(Sprites)
    .then(newSprites => {
      console.log(newSprites)
    })
    .catch(err => {
      console.log(err)
    })
})
