const mongoose = require('../db/connection')

const spriteSchema = new mongoose.Schema({
  sprites: {
    back_default: String,
    back_female: String,
    back_shiny: String,
    back_shiny_female: String,
    front_default: String,
    front_female: String,
    front_shiny: String,
    front_shiny_female: String
  }
})

module.exports = mongoose.model('Sprites', spriteSchema)
