import * as actions from '../actionTypes';
import { initState } from '../store';

export const counterAReducer = (state = initState.counterA, action) => {
  console.log(action);

  switch (action.type) {
    case actions.INC_A:
      return state + action.payload;
    case actions.DEC_A:
      return state - action.payload;
    default:
      return state;
  }
};
