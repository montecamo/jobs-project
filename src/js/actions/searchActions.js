export function queryChange(query) {
  console.log('query change');
  return {
    type: 'QUERY_CHANGE',
    payload: query 
  }
}

export function scrollSearch(type) {
  return {
    type: 'SCROLL_SEARCH',
    payload: type
  }
}
