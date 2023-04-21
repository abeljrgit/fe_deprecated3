import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import thunk from 'redux-thunk';
import { counterAReducer, counterBReducer } from './reducers';

// Initial State of central storage
export const initState = {
  counterA: 0,
  counterB: 88,
};

const reducers = combineReducers({
  counterA: counterAReducer,
  counterB: counterBReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));
