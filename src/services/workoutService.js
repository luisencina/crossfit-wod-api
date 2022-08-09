const { v4: uuid } = require('uuid')
const Workout = require("../database/Workout")

const getAllWorkouts = (req, res) => {
    const allWorkouts = Workout.getAllWorkouts()
    return allWorkouts;
}
const getOneWorkout = (workoutId) => {
    const workout = Workout.getOneWorkout(workoutId)
    return workout
}
const createNewWorkout = (newWorkout) => {
    const workoutToInsert = {
        id: uuid(),
        ...newWorkout,
        createdAt: new Date().toLocaleString("en-US", {timeZone: "UTC"}),
        updated: new Date().toLocaleString("en-US", {timeZone: "UTC"}),
    }

    const createdWorkoud = Workout.createNewWorkout(workoutToInsert)
    return createdWorkoud;
}
const updateWorkout = (req, res) => {
    return res.send(`Update workout ${req.params.workoutId}`)
}
const deleteOneWorkout = (req, res) => {
    return res.send(`Delete workout ${req.params.workoutId}`)
}

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateWorkout,
    deleteOneWorkout
}