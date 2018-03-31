import axios from 'axios';



export const getWorkouts= () => {
    const url = '/workouts';
    return axios.get(url);
}