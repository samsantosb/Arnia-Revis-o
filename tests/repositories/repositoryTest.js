const { PlayersModel } = require("../model/modelTest")

class PlayerRepository {
    constructor(database) {
        this.database = database
    }

    getAll() {
        const db = this.database
        return db
    }

    getPlayerByName(name) {
        const player = this.database.find(player => player.name === name)
        return player
    }

    getAllPlayersFromOnePostion(position) {
        const players = this.database.filter(player => player.position === position)
        return players
    }

    createPlayer(player) {
        this.database.push(player)
        return `Player ${player.name} was created`
    }
}

//examples of how to use the repository
const playerRepository = new PlayerRepository(PlayersModel)

//get all players
const allPlayers = playerRepository.getAll()
//console.log(allPlayers)

//get player by name
const playerByName = playerRepository.getPlayerByName('Lionel Messi')
//console.log(playerByName)

//get all players from one position
const allPlayersFromOnePosition = playerRepository.getAllPlayersFromOnePostion('Forward')
//console.log(allPlayersFromOnePosition)

//create a new player
const newPlayer = { name: 'Ronaldo', position: 'Forward', age: 36 }
const createPlayer = playerRepository.createPlayer(newPlayer)

//console.log(createPlayer)

module.exports = { PlayerRepository }