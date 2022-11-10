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

//query params to filter pokemon by attack, or defense, or type
app.get('/pokemon', (req, res) => {
    const { attack, defense, type } = req.query

    const filteredPokemons = pokemons.filter(pokemon => {
        if (attack) {
            return pokemon.attack === Number(attack)
        }
        if (defense) {
            return pokemon.defense === Number(defense)
        }
        if (type) {
            return pokemon.type === type
        }
        //a condition that take two diferent query params
        if (attack && defense) {
            return pokemon.attack === Number(attack) && pokemon.defense === Number(defense)
        }
        if (attack && type) {
            return pokemon.attack === Number(attack) && pokemon.type === type
        }
        if (defense && type) {
            return pokemon.defense === Number(defense) && pokemon.type === type
        }

        return pokemon
    })
    res.json(filteredPokemons)
})

//example request: http://localhost:3000/pokemon?attack=49

//example request with two route params: http://localhost:3000/pokemon?attack=49&defense=49
/*
nesse exemplo, defense e pokemon são undefined, então o filter vai retornar o pokemon

*/


app.listen(3000, () => {
    console.log(`app is running at localhost:3000`);
});