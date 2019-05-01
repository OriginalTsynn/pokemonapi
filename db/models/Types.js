const mongoose = require('../connection')

const typeSchema = new mongoose.Schema({
  types: [
    {
      slot: Number,
      type: {
        name: String
      }
    },
    {
      slot: Number,
      type: {
        name: String
      }
    }
  ]
})

module.exports = mongoose.model('Types', typeSchema)
