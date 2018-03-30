const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const workoutsSchema = new Schema({
    name: {
        required: true,
        type: String,
        

    }
   
});

const Workouts = mongoose.model('Workouts', workoutsSchema);
module.exports = Workouts;