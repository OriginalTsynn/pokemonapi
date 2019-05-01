const axios = require('axios')
const fs = require('fs')

let baseURL = `https://pokeapi.com/api/v1/pokemon/`
let peopleCount = 1

let ids = []

// build array of random ids
for (let i = 0; i < peopleCount; i++) {
  ids.push(i)
}

// build 20 urls to make calls to, and return array of promises with those urls
// @ts-ignore
let calls = ids.map(id => `${baseURL}${id}`).map(url => axios.get(url))

// execute all promises, writing to disk if successful
Promise.all(calls)
  .then(success => {
    let collectedData = success.map(res => res.data)
    let stringified = JSON.stringify(collectedData)
    fs.writeFile(__dirname + '/people.json', stringified, 'utf8', err => {
      if (err) {
        console.error(err)
      } else {
        console.log(
          `successfully wrote ${collectedData.length} records to db/people.json`
        )
      }
    })
  })
  .catch(err => {
    console.error(err)
    console.error(
      'there was probably an issue with the rate limit, try again in 10 seconds or check the error messages above.'
    )
  })
