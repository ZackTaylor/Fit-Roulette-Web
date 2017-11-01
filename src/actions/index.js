import axios from 'axios';

export const CLICK_TIMER = 'CLICK_TIMER';
export const RESTART_TIMER = 'RESTART_TIMER';
export const GET_EXERCISES = 'GET_EXERCISES';
export const NEXT_EXERCISE = 'NEXT_EXERCISE';

const ROOT_URL = 'https://fitroulette-api.herokuapp.com';

export const togglePause = () => {
  return {
    type: CLICK_TIMER
  };
};

export const restartTimer = () => {
  return {
    type: RESTART_TIMER
  };
};

export const nextExercise = () => {
  return {
    type: NEXT_EXERCISE
  };
};

export const getExercises = () => {
  const request = axios.get(`${ROOT_URL}/exercises`);
  return {
    type: GET_EXERCISES,
    payload: request
  };
};
