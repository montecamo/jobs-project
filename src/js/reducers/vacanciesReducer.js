'use strict'

let initialState = {
  status: 'welcome',
  list: []
};

const vacanciesReducer = (state=initialState, action) => {
  switch(action.type) {
  case 'FETCH_VACANCIES_START': 
    state = {...state, status: 'loading' };
    break;
  case 'FETCH_VACANCIES_SUCCESS':
    let list = action.payload;
    let status = list.length ? 'success' : 'not-found';
    state = {...state, status, list};
    break;
  case 'FETCH_VACANCIES_ERR':
    state = {...state, status: 'err'}
    break;
  }
  return state;
};

export default vacanciesReducer;
