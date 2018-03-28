const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const workoutsSchema = new Schema({
    name: {
        required: true,
        type: String,

    },
    reps: {
        type: Number,
    },
    sets:{
        type: Number,
    }

});

const Workouts = mongoose.model('Workouts', workoutsSchema);
module.exports = Workouts;