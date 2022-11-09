function sum(a, b) {
    return a + b
}

class Person {
    constructor(age, name) {
        this.age = age
        this.name = name
    }

    talk() {
        return `person ${this.name} is talking`
    }

    run(speed) {
        return `person ${this.name} is running at speed ${speed}`
    }

    break(speed) {
        return `person ${this.name} is breaking at speed ${speed}`
    }
}

module.exports = { sum, Person }