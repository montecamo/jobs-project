import { combineReducers } from 'redux';

import initial from './initial';

let reducer = combineReducers({
  initial: initial
});

export default reducer;
