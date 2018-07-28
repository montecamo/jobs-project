'use strict'

import { combineReducers } from 'redux';

import vacanciesReducer from './vacanciesReducer';
import filtersReducer from './filtersReducer';
import searchReducer from './searchReducer';
import themeReducer from './themeReducer';

let reducer = combineReducers({
  vacancies: vacanciesReducer,
  filters: filtersReducer,
  search: searchReducer,
  theme: themeReducer
});

export default reducer;
