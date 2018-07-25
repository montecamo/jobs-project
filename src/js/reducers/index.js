'use strict'

import { combineReducers } from 'redux';

import vacanciesReducer from './vacanciesReducer';

let reducer = combineReducers({
  vacancies: vacanciesReducer 
});

export default reducer;
