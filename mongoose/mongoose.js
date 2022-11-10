const mongoose = require('mongoose');
const { config } = require('dotenv');
const { CatModel, catsArra } = require('./catModel');
const { TutorModel, tutorsArray } = require('./tutorModel');
config();

const url = process.env.MONGO;

async function catSeeding() {
    mongoose.connect(url)
    console.log('Connected to MongoDB');

    try {
        //const cats = await CatModel.insertMany(catsArray); --> seeding

        const cats = await CatModel.find({ _id: '636d7b94dc13b84a29544ceb' }); //--> queries
        console.log(cats);

        console.log('Seeding done, cats added to the database');
    } catch (error) {
        console.log(error);
        console.log('Seeding failed, cannot add any cats to the database');
    }

    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
}
//catSeeding();


async function turtorSeeind() {
    mongoose.connect(url)
    console.log('Connected to MongoDB');

    try {
        //const tutors = await TutorModel.insertMany(tutorsArray);

        //cat aqui é a chave do objeto get Tutor
        const getTutorial = await TutorModel.find({});
        const getTutorWithPopulate = await TutorModel.find({}).populate('cat')

        //do a aggregate that correspond to upper query
        // const getTutor2 = await TutorModel.aggregate([
        //     {
        //         $lookup: {
        //             from: 'cats',
        //             localField: 'cat',
        //             foreignField: '_id',
        //             as: 'cat'
        //         }
        //     }
        // ])

        console.log(getTutorial);
        console.log(getTutorWithPopulate);

        console.log('Seeding done, tutors added to the database');
    } catch (error) {
        console.log(error);
        console.log('Seeding failed, cannot add any tutors to the database');
    }

    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
}
turtorSeeind();