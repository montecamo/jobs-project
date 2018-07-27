import { fetchVacancies } from './vacanciesActions';
import { scrollSearch } from './searchActions';


export function toggleSalaryOnly() {
  return {
    type: 'TOGGLE_SALARYONLY_FILTER',
  }
}

export function toggleExtendedSearch() {
  return {
    type: 'TOGGLE_EXTENDEDSEARCH_FILTER'
  }
}

export function switchPage(to) {
  return (dispatch, getState) => {
    dispatch({
      type: 'SWITCH_PAGE',
      payload: to
    });

    let { query } = getState().search;
    dispatch(fetchVacancies(query));
    dispatch(scrollSearch(true));
  }
}

export function setMaxPage(page) {
  return {
    type: 'SET_MAX_PAGE',
    payload: page
  }
}
