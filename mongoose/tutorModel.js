const { Schema, model } = require('mongoose');

const tutorSchema = new Schema({
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
        min: 10,
        max: 30,
    },
    cat: {
        //o tipo desse parâmetro é um ObjectId do tipo Cat
        type: Schema.Types.ObjectId,
        //o ref é o nome do model/collection que está sendo referenciado
        ref: 'Cat',
        required: true
    }
});

const TutorModel = model('Tutor', tutorSchema);


//para seeding
const tutorsArray = [
    { name: 'Jerry', age: 20, cat: '636d7b94dc13b84a29544cec' },
]

module.exports = { TutorModel, tutorsArray };
