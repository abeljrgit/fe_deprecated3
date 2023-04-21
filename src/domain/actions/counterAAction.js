import * as actions from '../actionTypes';

/////////////////////
// Counter
/////////////////////
export const onCounterAIncrement = (value) => {
  return {
    type: actions.INC_A,
    payload: value,
  };
};

export const onCounterADecrement = (value) => {
  return {
    type: actions.DEC_A,
    payload: value,
  };
};
