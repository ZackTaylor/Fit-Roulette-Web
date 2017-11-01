import { GET_EXERCISES, NEXT_EXERCISE } from '../actions';

export default function(state = { all: {}, random: 0 }, action) {
  switch (action.type) {
    case GET_EXERCISES:
      return { ...state, all: action.payload.data };

    case NEXT_EXERCISE:
      return { ...state, random: Math.round(Math.random() * state.all.length) + 1 };

    default:
      return state;
  }
}
