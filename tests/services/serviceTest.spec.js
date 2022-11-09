const { PlayerService } = require('../services/serviceTest')

const soccerPlayersMock = [
    { name: 'Lionel Messi', position: 'Forward', age: 32 },
    { name: 'Luis Suarez', position: 'Forward', age: 33 },
    { name: 'Cristiano Ronaldo', position: 'Forward', age: 35 },
    { name: 'Neymar', position: 'Forward', age: 28 },
]

const newPlayerMock = { name: 'Ronaldo', position: 'Forward', age: 36 }

const newPlayerMessageMock = 'Player Ronaldo was created'

const playerRepositoryMock = {
    getAll: () => soccerPlayersMock,
    getPlayerByName: () => soccerPlayersMock[0],
    getAllPlayersFromOnePostion: () => soccerPlayersMock,
    createPlayer: () => newPlayerMessageMock
}

const resultsMock = {
    getAll: `All players: ${soccerPlayersMock}`,
    getPlayerByName: `Player ${soccerPlayersMock[0].name} is a ${soccerPlayersMock[0].position} and is ${soccerPlayersMock[0].age} years old`,
    getAllPlayersFromOnePostion: `All players from Forward position: ${soccerPlayersMock}`,
    createPlayer: `Player ${newPlayerMock.name} was created`
}

const playerService = new PlayerService(playerRepositoryMock)

describe('PlayerService', () => {
    describe('getAll', () => {
        it('should return all players', () => {
            const result = playerService.getAll()
            expect(result).toEqual(resultsMock.getAll)
        })
        it('should call playerRepository.getAll', () => {
            const spy = jest.spyOn(playerRepositoryMock, 'getAll')
            playerService.getAll()
            expect(spy).toHaveBeenCalled()
        });
        it('should return error if catch', () => {
            jest.spyOn(playerRepositoryMock, 'getAll').mockImplementation(() => { throw new Error('Error') })
            const result = playerService.getAll()
            expect(result).toEqual('error')
        })
    });

    describe('getPlayerByName', () => {
        it('should return a player by name', () => {
            const result = playerService.getPlayerByName('Lionel Messi')
            expect(result).toEqual(resultsMock.getPlayerByName)
        })
        it('should call playerRepository.getPlayerByName', () => {
            const spy = jest.spyOn(playerRepositoryMock, 'getPlayerByName')
            playerService.getPlayerByName('Lionel Messi')
            expect(spy).toHaveBeenCalled()
        });
        it('should return error if catch', () => {
            jest.spyOn(playerRepositoryMock, 'getPlayerByName').mockImplementation(() => { throw new Error('Error') })
            const result = playerService.getPlayerByName('Lionel Messi')
            expect(result).toEqual('error')
        })
    });

    describe('getAllPlayersFromOnePostion', () => {
        it('should return all players from one position', () => {
            const result = playerService.getAllPlayersFromOnePostion('Forward')
            expect(result).toEqual(resultsMock.getAllPlayersFromOnePostion)
        })
        it('should call playerRepository.getAllPlayersFromOnePostion', () => {
            const spy = jest.spyOn(playerRepositoryMock, 'getAllPlayersFromOnePostion')
            playerService.getAllPlayersFromOnePostion('Forward')
            expect(spy).toHaveBeenCalled()
        });
        it('should return error if catch', () => {
            jest.spyOn(playerRepositoryMock, 'getAllPlayersFromOnePostion').mockImplementation(() => { throw new Error('Error') })
            const result = playerService.getAllPlayersFromOnePostion('Forward')
            expect(result).toEqual('error')
        })
    });

    describe('createPlayer', () => {
        it('should create a new player', () => {
            const result = playerService.createPlayer(newPlayerMock)
            expect(result).toEqual(resultsMock.createPlayer)
        })
        it('should call playerRepository.createPlayer', () => {
            const spy = jest.spyOn(playerRepositoryMock, 'createPlayer')
            playerService.createPlayer(newPlayerMock)
            expect(spy).toHaveBeenCalled()
        });
        it('should return error if catch', () => {
            jest.spyOn(playerRepositoryMock, 'createPlayer').mockImplementation(() => { throw new Error('Error') })
            const result = playerService.createPlayer(newPlayerMock)
            expect(result).toEqual('error')
        })
    });
});