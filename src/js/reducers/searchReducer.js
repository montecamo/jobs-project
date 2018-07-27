'use strict'

let initialState = {
  query: '',
  scroll: false
}

const searchReducer = (state=initialState, action) => {
  switch(action.type) {
  case 'QUERY_CHANGE':
    state = {...state, query: action.payload};
    break;
  case 'SCROLL_SEARCH':
    state = {...state, scroll: action.payload};
    break;
  }
  return state;
}

export default searchReducer;
