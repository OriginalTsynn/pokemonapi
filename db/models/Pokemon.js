const mongoose = require('../connection')

const pokemonSchema = new mongoose.Schema({
  name: String,
  height: Number,
  weight: Number,
  id: Number,
  sprites: { type: mongoose.Schema.Types.ObjectId, ref: 'Sprites' }
})

module.exports = mongoose.model('Pokemon', pokemonSchema)
