This is a poke-lite api! Based off of data generated from pokeapi.co.

https://floating-peak-48613.herokuapp.com/api/pokemon/

## dependencies:

    "axios": "^0.18.0",
    "express": "^4.16.4",
    "mongoose": "^5.5.4",
    "nodemon": "^1.19.0"

---

# paths:

# Pokemon

## /api/pokemon/

-- as a GET this will return all 151 pokemon
-- as POST will create a new pokemon entry

## /api/pokemon/id/:id

-- this path will retrieve a single pokemon based on its express ID

## /api/pokemon/pokedexID/:id

-- this path will retrieve a single pokemon based on its pokedex ID (1-151)

## /api/pokemon/name/:name

-- this path will retrieve a single pokemon based on its name (must be typed lowercase)

## /api/pokemon/update/:id

-- this is a PUT path, to UPDATE a single pokemon based on its express ID

## /api/pokemon/delete/:id

-- this is a DELETE path, to remove an entire pokemon entry based on its express ID

# Sprites

## /api/sprites/

-- as a GET this will return all 151 pokemons sprites groupings
-- as POST will create a new sprite entry

## /api/sprites/id/:id

-- this path will retrieve a single pokemon sprites based on its express ID

## /api/sprites/pokedexID/:id

-- this path will retrieve a single pokemon sprites and name based on its pokedex ID (1-151)

## /api/sprites/name/:name

-- this path will retrieve a single pokemon sprites based on its name (must be typed lowercase)

## /api/sprites/update/:id

-- this is a PUT path, to UPDATE a single pokemon sprites based on its express ID

## /api/sprites/delete/:id

-- this is a DELETE path, to remove an entire pokemon sprite entries based on its express ID

# Types

## /api/types/

-- as a GET this will return all 151 pokemons type pairings
-- as POST will create a new types entry

## /api/types/id/:id

-- this path will retrieve a single pokemon types based on its express ID

## /api/types/pokedexID/:id

-- this path will retrieve a single pokemon types and name based on its pokedex ID (1-151)

## /api/types/name/:name

-- this path will retrieve a single pokemon types based on its name (must be typed lowercase)

## /api/types/update/:id

-- this is a PUT path, to UPDATE a single pokemon types based on its express ID

## /api/types/delete/:id

-- this is a DELETE path, to remove an entire pokemon types entries based on its express ID

# Stats

## /api/stats/

-- as a GET this will return all 151 pokemons stat blocks
-- as POST will create a new stat block entry

## /api/stats/id/:id

-- this path will retrieve a single pokemon stat block based on its express ID

## /api/stats/pokedexID/:id

-- this path will retrieve a single pokemon stat block and name based on its pokedex ID (1-151)

## /api/stats/name/:name

-- this path will retrieve a single pokemon stat block based on its name (must be typed lowercase)

## /api/stats/update/:id

-- this is a PUT path, to UPDATE a single pokemon stat block based on its express ID

## /api/stats/delete/:id

-- this is a DELETE path, to remove an entire pokemon stat block entries based on its express ID

# A Pokemon entry will contain:

## underscore id

<!-- it wont let me use _id -->

is the express assigned ID

## height

is the height of the pokemon

## id

is the PokeDex id of a pokemon (1-151)

## name

is the name of the pokemon. Always use lowercase

## sprites

is the sprite objectmodel that pokemon

## stats

is the stat object/model of that pokemon

## types

is the type object/model of that pokemon

## weight

is the weight of that pokemon (in lbs)

# a sprites object example

        "sprites": {
            "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
            "back_female": null,
            "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
            "back_shiny_female": null,
            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
            "front_female": null,
            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
            "front_shiny_female": null
        },

# a stat block/object example

                "stats": [
            {
                "base_stat": 45,
                "effort": 0,
                "stat": {
                    "name": "speed",
                    "url": "https://pokeapi.co/api/v2/stat/6/"
                }
            },
            {
                "base_stat": 65,
                "effort": 0,
                "stat": {
                    "name": "special-defense",
                    "url": "https://pokeapi.co/api/v2/stat/5/"
                }
            },
            {
                "base_stat": 65,
                "effort": 1,
                "stat": {
                    "name": "special-attack",
                    "url": "https://pokeapi.co/api/v2/stat/4/"
                }
            },
            {
                "base_stat": 49,
                "effort": 0,
                "stat": {
                    "name": "defense",
                    "url": "https://pokeapi.co/api/v2/stat/3/"
                }
            },
            {
                "base_stat": 49,
                "effort": 0,
                "stat": {
                    "name": "attack",
                    "url": "https://pokeapi.co/api/v2/stat/2/"
                }
            },
            {
                "base_stat": 45,
                "effort": 0,
                "stat": {
                    "name": "hp",
                    "url": "https://pokeapi.co/api/v2/stat/1/"
                }
            }
        ],

# A Types object example

        "types": [
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            },
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ],
