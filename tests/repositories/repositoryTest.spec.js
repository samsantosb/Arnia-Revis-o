const { PlayerRepository } = require('./repositoryTest')

const soccerPlayersMock = [
    { name: 'Lionel Messi', position: 'Forward', age: 32 },
    { name: 'Luis Suarez', position: 'Forward', age: 33 },
    { name: 'Cristiano Ronaldo', position: 'Forward', age: 35 },
    { name: 'Neymar', position: 'Forward', age: 28 },
]

const newPlayerMock = { name: 'Ronaldo', position: 'Forward', age: 36 }

const newPlayerMessageMock = 'Player Ronaldo was created'

const playerRepository = new PlayerRepository(soccerPlayersMock)

describe('PlayerRepository', () => {
    describe('getAll', () => {
        it('should return all players', () => {
            const result = playerRepository.getAll()
            expect(result).toEqual(soccerPlayersMock)
        })
    });
    describe('getPlayerByName', () => {
        it('should return a player by name', () => {
            const result = playerRepository.getPlayerByName('Lionel Messi')
            expect(result).toEqual(soccerPlayersMock[0])
        })
    });
    describe('getAllPlayersFromOnePostion', () => {
        it('should return all players from one position', () => {
            const result = playerRepository.getAllPlayersFromOnePostion('Forward')
            expect(result).toEqual(soccerPlayersMock)
        })
    });
    describe('createPlayer', () => {
        it('should create a new player', () => {
            const result = playerRepository.createPlayer(newPlayerMock)
            expect(result).toEqual(newPlayerMessageMock)
        })
    });
});