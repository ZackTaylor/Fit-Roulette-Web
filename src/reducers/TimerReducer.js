import { CLICK_TIMER, RESTART_TIMER } from '../actions';

export default function(state = { paused: false, fontSize: 'auto', seconds: '45' }, action) {
  switch (action.type) {
    case CLICK_TIMER:
      return { ...state, paused: !state.paused, fontSize: state.paused ? 'auto' : 45 };

    case RESTART_TIMER:
      return { ...state, seconds: typeof state.seconds === 'string' ? 45 : '45' };

    default:
      return state;
  }
}
