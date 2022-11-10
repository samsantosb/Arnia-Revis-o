class Person {
    constructor(age, name) {
        //declaração sem parâmetro
        this.country = 'Brazil'

        //declaração com parâmetro
        this.name = name
        this.age = age
    }
    //metodos da classe
    run(speed) {
        //speed é um parâmetro do método e apenas dele
        //this.name é do construtor, pode ser acessador por toda a classe
        return `person ${this.name} is running at speed ${speed}`
    }
    break(speed) {
        return `person ${this.name} is breaking at speed ${speed}`
    }
}

const person = new Person(20, 'João')
//person.break(10)
//person.run(10)
//person.name
//person.country
//person.age
class SoccerPlayer {
    constructor(person, team) {
        //person é uma dependência do soccer player
        //um soccerplayer precisa de ser uma pessoa antes de ser um jogador de futebol
        this.person = person
        this.team = team
    }

    run(speed) {
        return this.person.run(speed)
    }

    break(speed) {
        return this.person.break(speed)
    }

    kickBall() {
        return `${this.person.name} is kicking the ball`
    }

    getTeam() {
        return this.team
    }
}

class SoccerTeamManager {
    constructor(soccerPlayer, favoriteTatic) {
        this.soccerPlayer = soccerPlayer
        this.favoriteTatic = favoriteTatic
    }

    getFavoriteTatic() {
        return this.favoriteTatic
    }

    getTeam() {
        return this.soccerPlayer.getTeam()
    }
}


//a factory injeta as dependências para criar um objeto enriquecido
function factory() {
    //esse aqui é o joão
    const person = new Person(20, 'João')

    //esse aqui é o joão, como jogador de futebol do time são paulo
    const soccerPlayer = new SoccerPlayer(person, 'São Paulo')

    //esse aqui é o João, depois de jogador de futebol se tornou um técnico
    const soccerTeamManager = new SoccerTeamManager(soccerPlayer, '4-4-2')

    //aqui retornamos um novo objeto, ainda + enriquecido
    return soccerTeamManager
}


//_______________________________________________________

const money = [
    {
        name: 'João',
        bank: 'Itaú',
        account: '123456',
        balanceInDolars: 1000
    },
    {
        name: 'Maria',
        bank: 'Bradesco',
        account: '123456',
        balanceInDolars: 2000
    },
]

class MoneyRepository {
    constructor(money) {
        //aqui foi o banco de dados
        //mas na pratica pode ser que venha o Model do banco de dados
        this.money = money
    }

    //busca no banco de dados
    getUserByName(name) {
        return this.money.find(user => user.name === name)
    }
}

class MoneyService {
    constructor(moneyRepository) {
        this.moneyRepository = moneyRepository
    }

    getUserMoneyInReais(name) {
        try {
            const user = this.moneyRepository.getUserByName(name)

            //regra de negocio
            const money = user.balanceInDolars * 5.5

            return money
        } catch (error) {
            return 'Erro ao buscar usuário'
        }
    }
}

//a mesma factory dos outros códigos
function moneyFactory() {
    const moneyRepository = new MoneyRepository(money)
    const moneyService = new MoneyService(moneyRepository)

    return moneyService
}

//instancia da factory
const moneyService = moneyFactory()

//chamada da camada de serviço, no metodo getUserMoneyInReais
console.log(moneyService.getUserMoneyInReais('João'))
