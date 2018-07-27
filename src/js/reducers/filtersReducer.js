'use strict'

let initialState = {
  minSalary: null,
  salaryOnly: false,
  extended: false,
  currentPage: 1,
  maxPage: 0
}

const filtersReducer = (state=initialState, action) => {
  switch(action.type) {
  case 'TOGGLE_SALARYONLY_FILTER':
    state = {...state, salaryOnly: !state.salaryOnly};
    break;
  case 'TOGGLE_EXTENDEDSEARCH_FILTER':
    state = {...state, extendedSearch: !state.extendedSearch };
    break;
  case 'SWITCH_PAGE':
    state = {...state, currentPage: action.payload};
    break;
  case 'SET_MAX_PAGE':
    state = {...state, maxPage: action.payload};
    break;
  }
  return state;
}

export default filtersReducer;
