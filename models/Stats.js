const mongoose = require('../db/connection')

const statSchema = new mongoose.Schema({
  stats: [
    {
      base_stat: Number,
      stat: {
        name: String
      }
    },
    {
      base_stat: Number,
      stat: {
        name: String
      }
    },
    {
      base_stat: Number,
      stat: {
        name: String
      }
    },
    {
      base_stat: Number,
      stat: {
        name: String
      }
    },
    {
      base_stat: Number,
      stat: {
        name: String
      }
    },
    {
      base_stat: Number,
      stat: {
        name: String
      }
    }
  ]
})

module.exports = mongoose.model('Stats', statSchema)
