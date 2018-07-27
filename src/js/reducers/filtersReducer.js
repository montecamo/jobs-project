'use strict'

let initialState = {
  minSalary: {
    status: false,
    amount: 0
  },
  salaryOnly: false,
  extended: false,
  currentPage: 1,
  maxPage: 0
}

const filtersReducer = (state=initialState, action) => {
  let minSalary = {...state.minSalary};
  switch(action.type) {
  case 'TOGGLE_SALARYONLY_FILTER':
    state = {...state, salaryOnly: !state.salaryOnly};
    break;
  case 'TOGGLE_SALARY_FILTER':
    minSalary.status = !minSalary.status
    state = {...state};
    break;
  case 'CHANGE_SALARYFILTER_AMOUNT':
    minSalary.amount = action.payload;
    state = {...state};
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
  state.minSalary = minSalary;
  return state;
}

export default filtersReducer;
