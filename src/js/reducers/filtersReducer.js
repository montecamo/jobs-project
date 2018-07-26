'use strict'

let initialState = {
  salaryOnly: false,
  extended: false
}

const filtersReducer = (state=initialState, action) => {
  switch(action.type) {
  case 'TOGGLE_SALARYONLY_FILTER':
    state = {...state, salaryOnly: !state.salaryOnly};
    break;
  case 'TOGGLE_EXTENDEDSEARCH_FILTER':
    state = {...state, extendedSearch: !state.extendedSearch };
    break;
  }
  return state;
}

export default filtersReducer;
