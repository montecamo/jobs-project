import { fetchVacancies } from './vacanciesActions';
import { scrollSearch } from './searchActions';


export function toggleSalaryOnly() {
  return {
    type: 'TOGGLE_SALARYONLY_FILTER',
  }
}

export function toggleSalaryFilter(amount) {
  return {
    type: 'TOGGLE_SALARY_FILTER',
    payload: amount
  }
}

export function changeSalaryFilterAmount(amount) {
  return {
    type: 'CHANGE_SALARYFILTER_AMOUNT',
    payload: amount
  }
}

export function toggleLocationFilter(location) {
  return {
    type: 'TOGGLE_LOCATION_FILTER',
    payload: location
  }
}

export function changeLocationFilter(location) {
  return {
    type: 'CHANGE_LOCATION_FILTER',
    payload: location 
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
