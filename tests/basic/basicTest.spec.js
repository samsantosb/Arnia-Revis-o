const { sum, Person } = require('./basicTest.js')

//exemplo 1
const sumMock = {
    a: 1,
    b: 2,
    expectedResult: 3
}

describe('sum', () => {
    it('should sum two numbers', () => {
        const result = sum(sumMock.a, sumMock.b)
        expect(result).toBe(sumMock.expectedResult)
    })
});


//exemplo 2

const personMock = {
    age: 20,
    name: 'arnia',
}

const personMethodsResultMock = {
    expectedResultTalk: 'person arnia is talking',
    expectedResultRun: 'person arnia is running at speed 10',
    expectedResultBreak: 'person arnia is breaking at speed 10',
}

const fakeSpeed = 10

const arnia = new Person(personMock.age, personMock.name)

describe('Person', () => {
    describe('constructor', () => {
        it('should create a new person with an age', () => {
            expect(arnia.age).toBe(20)
        })
        it('should create a new person with a name', () => {
            expect(arnia.name).toBe('arnia')
        })
    })
    describe('talk', () => {
        it('should return a string with the name of the person', () => {
            expect(arnia.talk()).toBe(personMethodsResultMock.expectedResultTalk)
        })
    })
    describe('run', () => {
        it('should return a string with the name of the person and the speed', () => {
            expect(arnia.run(fakeSpeed)).toBe(personMethodsResultMock.expectedResultRun)
        })
    })
    describe('break', () => {
        it('should return a string with the name of the person and the speed', () => {
            expect(arnia.break(fakeSpeed)).toBe(personMethodsResultMock.expectedResultBreak)
        })
    })
});


//exemplo 3

