const mongoose = require('../db/connection')

const Sprites = require('../models/Sprites')

const pokemonSchema = new mongoose.Schema({
  name: String,
  height: Number,
  weight: Number,
  id: Number,
  _sprites: { type: mongoose.Schema.Types.ObjectId, ref: 'Sprites' }
})

module.exports = mongoose.model('Pokemon', pokemonSchema)
