const express = require('express')
const app = express()
//  initializing controller routes
const pokeController = require('./controllers/pokemon')
const usersController = require('./controllers/sprites')
const typeController = require('./controllers/types')
const abilityController = require('./controllers/abilities')
//  initialize body parse
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api/pokemon', pokeController)
app.use('/api/sprites', usersController)
app.use('/api/types', typeController)
app.use('/api/abilities', abilityController)

app.listen(3000, () => console.log('We have lift-off!  Port 3000 is go!'))
