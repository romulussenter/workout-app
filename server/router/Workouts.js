const express = require('express');
const router = express.Router();
const mockWorkouts = require('../mocks/workouts');

const Workouts = require('../model/workouts');

const exerciseArrToObj = (arrayOfexercise) => {
    
    const accumulator = {};
     
    arrayOfexercise.forEach(workouts => {
        const id = workouts._id;
        const copy = {...workouts._doc}
        delete copy._id;
        accumulator[id] = copy;
        
    });
       
    return accumulator;


}

router.get('/', (req, res, next) => {
    Exercises.find()
           .exec()
           .then(allExercises => {
               
            res.status(200).json({
                workout: exerciseArrToObj(allWorkouts)
            });
      
           

           })

           
           .catch(next);
           
   
});
router.get('/workouts/:id',(req, res, next) => {
    const {id} = req.params;
   
   Exercises.findById(id)
           .exec()
           .then(selectedWorkouts => {
                const selectedId = selectedWorkouts._id;
                const copy = {...selectedWorkouts._doc};
                delete copy._id
            res.status(200).json({
                exercise: {
                    [selectedId]: copy
                }
            })
           })
           .catch(next);
    
})

router.post('/workouts', (req, res, next) => {
    if(!req.body.name){
        next({msg:'Bad request'})
    }
    const workouts = new Workouts({
        name: req.body.name,
        reps: req.body.reps,
        sets: req.body.sets

    });
    workouts.save()
           .then(response => {
            res.status(201).json({
                msg: 'created workout'
                })
                
           })
            .catch(next);
    
 
})

router.put('/workouts/:id', (req, res, next) => {
 const {id} = req.params;
 const update = {
    name: req.body.name,
    reps: req.body.reps,
    sets: req.body.sets

 };
Workouts.findByIdAndUpdate(id, update)
    .then(response => {
        res.status(200).json({
            msg: 'You have been updated'
        })
    })
    .catch(next)
});

router.delete('/workouts/:id', (req, res, next) => {
    const { id } = req.params;
    Workouts.findByIdAndRemove(id)
        .then(response => {
            res.status(200).json({
                msg: 'Successfully deleted'
            });
        })

        .catch(next)
});

module.exports = router;