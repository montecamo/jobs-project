'use strict'

let initialState = {
  status: '',
  list: []
};

const vacanciesReducer = (state=initialState, action) => {
  switch(action.type) {
  case 'FETCH_VACANCIES_START': 
    state = {...state, status: 'loading' };
    break;
  case 'FETCH_VACANCIES_SUCCESS':
    state = {...state, status: 'success', list: action.payload};
    break;
  case 'FETCH_VACANCIES_ERR':
    state = {...state, status: 'err'}
    break;
  }
  return state;
};

export default vacanciesReducer;
