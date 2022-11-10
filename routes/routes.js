const express = require('express');
const app = express();
app.use(express.json());

const pokemons = [
    { id: 1, name: 'Bulbasaur', attack: 49, defense: 49, type: 'grass' },
    { id: 2, name: 'Ivysaur', attack: 62, defense: 63, type: 'grass' },
    { id: 3, name: 'Venusaur', attack: 82, defense: 83, type: 'grass' },
    { id: 4, name: 'Charmander', attack: 52, defense: 43, type: 'fire' },
    { id: 5, name: 'Charmeleon', attack: 64, defense: 58, type: 'fire' },
    { id: 6, name: 'Charizard', attack: 84, defense: 78, type: 'fire' },
    { id: 7, name: 'Squirtle', attack: 48, defense: 65, type: 'water' },
    { id: 8, name: 'Wartortle', attack: 63, defense: 80, type: 'water' },
    { id: 9, name: 'Blastoise', attack: 83, defense: 100, type: 'water' },
]
class PokemonRepository {
    constructor(pokemons) {
        //isso aqui é uma array de pokemons
        this.pokemons = pokemons
    }

    getAll() {
        return this.pokemons
    }

    getById(id) {
        console.log(id)
        const pokemonById = this.pokemons.find(pokemon => pokemon.id === Number(id))
        console.log(pokemonById)
        return pokemonById
    }
}

class PokemonService {
    constructor(pokemonRepository) {
        this.pokemonRepository = pokemonRepository
    }
    getAllNames() {
        try {
            //regra de negocio
            const pokemonNames = this.pokemonRepository.getAll().map(pokemon => pokemon.name)

            return pokemonNames
        } catch (error) {
            console.log(error)
        }
    }

    getById(id) {
        try {
            return this.pokemonRepository.getById(id)
        } catch (error) {
            console.log(error)
        }
    }
}


class PokemonController {
    constructor(service) {
        this.service = service
    }
    getAll(req, res) {
        const allPokemonNmaes = this.service.getAllNames();
        res.json(allPokemonNmaes).status(200);
    }

    getById(req, res) {
        //const id = req.params.id;
        const { id } = req.params;
        //console.log(id)
        const pokemon = this.service.getById(id);
        res.json(pokemon).status(200);
    }
}


function pokemonFactory() {
    const pokemonRepository = new PokemonRepository(pokemons)
    const pokemonService = new PokemonService(pokemonRepository)
    const pokemonController = new PokemonController(pokemonService)
    return pokemonController
}

const pokemon = pokemonFactory()


app.get('/pokemon', pokemon.getAll.bind(pokemon));
app.get('/pokemon/:id', pokemon.getById.bind(pokemon));

app.listen(3000, () => {
    console.log(`app is running at localhost:3000`);
});

/*
Model -> É o modelo do banco de dados criado com o ORM/Bbibilioteca

Repositorio -> camada que recebe o Model, é onde fazemos as nossas queries

Serviço -> camada de regra de negócio, recebe o Repository,
é onde fica tratamento da maior partes dos erros

Controller -> camada de entrada, recebe o Service
é onde fica Req/Res, status code, erros de body, etc

Rotas -> É onde definimos os endpoints e invoamos os controllers
*/




// app.get('/', (req, res) => {
//     const allPokemonNmaes = pokemons.map(pokemon => pokemon.name);
//     res.json(allPokemonNmaes).status(200);
// });

//separamos o req, res e jogamos ele pro controller

/*
(req, res) => {
    const allPokemonNmaes = pokemons.map(pokemon => pokemon.name);
    res.json(allPokemonNmaes).status(200);
}
*/