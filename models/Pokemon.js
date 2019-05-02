const mongoose = require('../db/connection')

const pokemonSchema = new mongoose.Schema({
  name: String,
  height: Number,
  weight: Number,
  id: Number,
  sprites: {
    type: mongoose.Schema.Types.Mixed,
    ref: 'Sprites'
  },
  stats: {
    type: mongoose.Schema.Types.Mixed,
    ref: 'Stats'
  },
  types: {
    type: mongoose.Schema.Types.Mixed,
    ref: 'Types'
  }
})

module.exports = mongoose.model('Pokemon', pokemonSchema)
