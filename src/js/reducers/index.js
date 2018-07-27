'use strict'

import { combineReducers } from 'redux';

import vacanciesReducer from './vacanciesReducer';
import filtersReducer from './filtersReducer';
import searchReducer from './searchReducer';

let reducer = combineReducers({
  vacancies: vacanciesReducer,
  filters: filtersReducer,
  search: searchReducer
});

export default reducer;
