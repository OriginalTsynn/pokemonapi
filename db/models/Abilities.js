const mongoose = require('../connection')

const abilitySchema = new mongoose.Schema({})

module.exports = mongoose.model('Abilities', abilitySchema)
