const mongoose = require('./connection')

const Pokemon = require('./models/Pokemon')
const Abilities = require('./models/Abilities')
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

Abilities.deleteMany({}).then(() => {
  Abilities.create(Abilities)
    .then(newAbilities => {
      console.log(newAbilities)
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
