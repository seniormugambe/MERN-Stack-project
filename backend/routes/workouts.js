const express = require('express');
const router = express.Router();
const {
  createWorkout,
  getAllWorkouts, 
  getSingleWorkout,
  updateWorkout,
  deleteWorkout,
} = require('../Controllers/workoutControllers');

// GET all workouts
router.get('/', getAllWorkouts);

// GET a single workout by ID
router.get('/:id', getSingleWorkout);

// POST create a new workout  
router.post('/', createWorkout);

// PUT update a workout by ID
router.patch('/:id', updateWorkout);

// DELETE delete a workout by ID
router.delete('/:id', deleteWorkout);

module.exports = router;

































/*const express= require("express")
const {getAllWorkouts,
    createWorkout,
    getWorkout,}= require("../Controllers/workoutControllers")
const router = express.Router()

//gett all workouts
router.get("/",getAllWorkouts)

//single workout
router.get("/:1d",getSWorkout)

router.post ("/",createWorkout)




router.put("/:id",(req,res)=>{
    res.send("Update workout")
})
router.delete("/:id",(req,res)=>{
    res.send("Delete a  workout")
})
module.exports=router */