const mongoose = require('../db/connection')

const typeSchema = new mongoose.Schema({
  types: [
    {
      slot: Number,
      type2: {
        name: String
      }
    },
    {
      slot: Number,
      type1: {
        name: String
      }
    }
  ]
})

module.exports = mongoose.model('Types', typeSchema)
