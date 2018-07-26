'use strict'

import { combineReducers } from 'redux';

import vacanciesReducer from './vacanciesReducer';
import filtersReducer from './filtersReducer';

let reducer = combineReducers({
  vacancies: vacanciesReducer,
  filters: filtersReducer,
});

export default reducer;
