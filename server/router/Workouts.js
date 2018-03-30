const express = require("express");
const router = express.Router();

const Workouts = require("../model/workouts");



router.get("/workouts", (req, res, next) => {
  Workouts.find()
    .exec()
    .then(allWorkouts => {
      res.status(200).json({
        workouts: allWorkouts
      });
    })

    .catch(next);
});
router.get("/workouts/:id", (req, res, next) => {
  const { id } = req.params;

  Workouts.findById(id)
    .exec()
    .then(selectedWorkouts => {
      res.status(200).json({
        workouts: selectedWorkouts
      });
    })
    .catch(next);
});

router.post("/workouts", (req, res, next) => {
  if (!req.body.name) {
    next({ msg: "Bad request" });
  }
  const workouts = new Workouts({
    name: req.body.name
  });

  workouts
    .save()
    .then(() => {
      res.status(201).json({
        msg: "created workout"
      });
    })
    .catch(err => {
      res.status(500).json({
        msg: 'bad'
      });
    });
});

router.put("/workouts/:id", (req, res, next) => {
  const { id } = req.params;
  const update = {
    name: req.body.name
  };
  Workouts.findByIdAndUpdate(id, update)
    .then(response => {
      res.status(200).json({
        msg: "You have been updated"
      });
    })
    .catch(next);
});

module.exports = router;
