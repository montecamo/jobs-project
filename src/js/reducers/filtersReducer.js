'use strict'

let initialState = {
  salaryOnly: false,
}

const filtersReducer = (state=initialState, action) => {
  switch(action.type) {
  case 'TOGGLE_SALARYONLY_FILTER':
    state = {...state, salaryOnly: !state.salaryOnly};
    break;
  }
  return state;
}

export default filtersReducer;
