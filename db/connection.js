const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/pokelite', {
  useNewUrlParser: true
})

mongoose.Promise = Promise

module.exports = mongoose
