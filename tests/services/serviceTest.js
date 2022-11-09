// const { PlayerRepository } = require('../repositories/repositoryTest')
// const { PlayersModel } = require('../model/modelTest')

class PlayerService {
    constructor(playerRepository) {
        this.playerRepository = playerRepository
        //iremos mockar esse cara a cima o repositorio
        //pois na hora de testar o service, não queremos
        //acessar o banco de dados
    }

    getAll() {
        try {
            const players = this.playerRepository.getAll()
            return `All players: ${players}`
        } catch (error) {
            return 'error'
        }
    }

    getPlayerByName(name) {
        try {
            const player = this.playerRepository.getPlayerByName(name)
            return `Player ${player.name} is a ${player.position} and is ${player.age} years old`
        } catch (error) {
            return 'error'
        }
    }

    getAllPlayersFromOnePostion(position) {
        try {
            const players = this.playerRepository.getAllPlayersFromOnePostion(position)
            return `All players from ${position} position: ${players}`
        } catch (error) {
            return 'error'
        }
    }

    createPlayer(player) {
        try {
            const result = this.playerRepository.createPlayer(player)
            return result
        } catch (error) {
            return 'error'
        }
    }
}

// function factory() {
//     const playerRepository = new PlayerRepository(PlayersModel)
//     const playerService = new PlayerService(playerRepository)
//     return playerService
// }

// const players = factory()

//log all service examples
//console.log(JSON.stringify(players.getAll()))

module.exports = { PlayerService }

