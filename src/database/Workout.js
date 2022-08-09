const DB = require('./db.json')
const { saveToDataBase } = require('./utils')

const getAllWorkouts = () => {
    return DB.workouts;
}

const getOneWorkout = (workoutId) => {
    return DB.workouts.find( x => x.id == workoutId );
}

const createNewWorkout = (newWorkout) => {
    const isAlreadyAdded = DB.workouts.find( x => x.name == newWorkout.name );
    if(isAlreadyAdded){
        return 
    }
    DB.workouts.push(newWorkout)
    saveToDataBase(DB)

    return newWorkout
}

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout
}