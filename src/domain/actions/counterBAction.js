import * as actions from '../actionTypes';

/////////////////////
// Counter
/////////////////////
export const onCounterBIncrement = (value) => {
  return {
    type: actions.INC_B,
    payload: value,
  };
};

export const onCounterBDecrement = (value) => {
  return {
    type: actions.DEC_B,
    payload: value,
  };
};
