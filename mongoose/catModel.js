const { Schema, model } = require('mongoose');

const catSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20,
        unique: true,
    },
    age: {
        type: Number,
        required: true,
        min: 0,
        max: 30,
    },
    colour: {
        type: [String],
        required: true
    }
});

//primeiro parâmetro é o nome da collection
//segundo parâmetro é a estrutura de dados Schema da Mongoose
const CatModel = model('Cat', catSchema);


//para seeding
const catsArray = [
    { name: 'Garfield', age: 5, colour: ['orange', 'black'] },
    { name: 'Tom', age: 3, colour: ['grey', 'white'] },
    { name: 'Felix', age: 2, colour: ['white', 'black'] },
    { name: 'Nermal', age: 1, colour: ['white', 'black'] },
]

module.exports = { CatModel, catsArray };