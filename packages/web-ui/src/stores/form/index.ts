import { combineReducers, createStore } from 'redux';

import { formReducer, flowReducer } from './reducers';

const store = createStore(combineReducers({
  form: formReducer,
  flow: flowReducer,
}));

export default store;
