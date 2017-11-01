import { combineReducers } from 'redux';
import TimerReducer from './TimerReducer';
import ExerciseReducer from './ExerciseReducer';

const rootReducer = combineReducers({
  timer: TimerReducer,
  exercises: ExerciseReducer
});

export default rootReducer;
