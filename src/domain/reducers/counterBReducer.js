import * as actions from '../actionTypes';
import { initState } from '../store';

export const counterBReducer = (state = initState.counterB, action) => {
  console.log(action);

  switch (action.type) {
    case actions.INC_B:
      return state + action.payload;
    case actions.DEC_B:
      return state - action.payload;
    default:
      return state;
  }
};
