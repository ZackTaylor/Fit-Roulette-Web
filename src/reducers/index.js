import { combineReducers } from 'redux';
import TimerReducer from './TimerReducer';

const rootReducer = combineReducers({
  timer: TimerReducer
});

export default rootReducer;
