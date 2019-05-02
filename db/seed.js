const mongoose = require('./connection')
console.log(mongoose)
//  5-2-19
//  had to split jsons into batches.  Attempted 153 in one batch, and it was over 28M lines of code, crashed text editor and caused other problems
//  So now it's in a friendlier to digest form of ~ 163k lines per json.
const batch1 = require('./pokeBatch1.json')
const batch2 = require('./pokeBatch2.json')
const batch3 = require('./pokeBatch3.json')
const batch4 = require('./pokeBatch4.json')
const batch5 = require('./pokeBatch5.json')
const batch6 = require('./pokeBatch6.json')
const batch7 = require('./pokeBatch7.json')
const batch8 = require('./pokeBatch8.json')

const Pokemon = require('../models/Pokemon')
const Stats = require('../models/Stats')
const Types = require('../models/Types')
const Sprites = require('../models/Sprites')

//  5-2-19
//  Adjusted seed to pull from multiple batches.  Maybe there is a more effecient method.  //  ? Please advise
Pokemon.deleteMany({}).then(() => {
  Pokemon.create(batch1)
    .then(newPokemon1 => {
      console.log(newPokemon1)
    })
    .catch(err => {
      console.log(err)
    })
  Pokemon.create(batch2)
    .then(newPokemon2 => {
      console.log(newPokemon2)
    })
    .catch(err => {
      console.log(err)
    })
  Pokemon.create(batch3)
    .then(newPokemon3 => {
      console.log(newPokemon3)
    })
    .catch(err => {
      console.log(err)
    })
  Pokemon.create(batch4)
    .then(newPokemon4 => {
      console.log(newPokemon4)
    })
    .catch(err => {
      console.log(err)
    })
  Pokemon.create(batch5)
    .then(newPokemon5 => {
      console.log(newPokemon5)
    })
    .catch(err => {
      console.log(err)
    })
  Pokemon.create(batch6)
    .then(newPokemon6 => {
      console.log(newPokemon6)
    })
    .catch(err => {
      console.log(err)
    })
  Pokemon.create(batch7)
    .then(newPokemon7 => {
      console.log(newPokemon7)
    })
    .catch(err => {
      console.log(err)
    })
  Pokemon.create(batch8)
    .then(newPokemon8 => {
      console.log(newPokemon8)
    })
    .catch(err => {
      console.log(err)
    })
})

Stats.deleteMany({}).then(() => {
  Stats.create(batch1)
    .then(newStats1 => {
      console.log(newStats1)
    })
    .catch(err => {
      console.log(err)
    })
  Stats.create(batch2)
    .then(newStats2 => {
      console.log(newStats2)
    })
    .catch(err => {
      console.log(err)
    })
  Stats.create(batch3)
    .then(newStats3 => {
      console.log(newStats3)
    })
    .catch(err => {
      console.log(err)
    })
  Stats.create(batch4)
    .then(newStats4 => {
      console.log(newStats4)
    })
    .catch(err => {
      console.log(err)
    })
  Stats.create(batch5)
    .then(newStats5 => {
      console.log(newStats5)
    })
    .catch(err => {
      console.log(err)
    })
  Stats.create(batch6)
    .then(newStats6 => {
      console.log(newStats6)
    })
    .catch(err => {
      console.log(err)
    })
  Stats.create(batch7)
    .then(newStats7 => {
      console.log(newStats7)
    })
    .catch(err => {
      console.log(err)
    })
  Stats.create(batch8)
    .then(newStats8 => {
      console.log(newStats8)
    })
    .catch(err => {
      console.log(err)
    })
})

Types.deleteMany({}).then(() => {
  Types.create(batch1)
    .then(newTypes1 => {
      console.log(newTypes1)
    })
    .catch(err => {
      console.log(err)
    })
  Types.create(batch2)
    .then(newTypes2 => {
      console.log(newTypes2)
    })
    .catch(err => {
      console.log(err)
    })
  Types.create(batch3)
    .then(newTypes3 => {
      console.log(newTypes3)
    })
    .catch(err => {
      console.log(err)
    })
  Types.create(batch4)
    .then(newTypes4 => {
      console.log(newTypes4)
    })
    .catch(err => {
      console.log(err)
    })
  Types.create(batch5)
    .then(newTypes5 => {
      console.log(newTypes5)
    })
    .catch(err => {
      console.log(err)
    })
  Types.create(batch6)
    .then(newTypes6 => {
      console.log(newTypes6)
    })
    .catch(err => {
      console.log(err)
    })
  Types.create(batch7)
    .then(newTypes7 => {
      console.log(newTypes7)
    })
    .catch(err => {
      console.log(err)
    })
  Types.create(batch8)
    .then(newTypes8 => {
      console.log(newTypes8)
    })
    .catch(err => {
      console.log(err)
    })
})

Sprites.deleteMany({}).then(() => {
  Sprites.create(batch1)
    .then(newSprites1 => {
      console.log(newSprites1)
    })
    .catch(err => {
      console.log(err)
    })
  Sprites.create(batch2)
    .then(newSprites2 => {
      console.log(newSprites2)
    })
    .catch(err => {
      console.log(err)
    })
  Sprites.create(batch3)
    .then(newSprites3 => {
      console.log(newSprites3)
    })
    .catch(err => {
      console.log(err)
    })
  Sprites.create(batch4)
    .then(newSprites4 => {
      console.log(newSprites4)
    })
    .catch(err => {
      console.log(err)
    })
  Sprites.create(batch5)
    .then(newSprites5 => {
      console.log(newSprites5)
    })
    .catch(err => {
      console.log(err)
    })
  Sprites.create(batch6)
    .then(newSprites6 => {
      console.log(newSprites6)
    })
    .catch(err => {
      console.log(err)
    })
  Sprites.create(batch7)
    .then(newSprites7 => {
      console.log(newSprites7)
    })
    .catch(err => {
      console.log(err)
    })
  Sprites.create(batch8)
    .then(newSprites8 => {
      console.log(newSprites8)
    })
    .catch(err => {
      console.log(err)
    })
})
