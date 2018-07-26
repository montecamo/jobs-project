'use strict'
import axios from 'axios';
import { convertQueryToArr, filterUniqueVacancies } from '../containers/assets';


export function fetchVacanciesStart() {
  return {
    type: 'FETCH_VACANCIES_START',
  }
}

export function fetchVacanciesSuccess(vacancies) {
  return {
    type: 'FETCH_VACANCIES_SUCCESS',
    payload: vacancies
  }
}

export function fetchVacanciesErr() {
  return {
    type: 'FETCH_VACANCIES_ERR',
  }
}

export function createGetPromise(query, filters) {
  return axios.get('http://82.146.40.234/job/search', { 
    params: {
      title: query
    }
  });
}

export function fetchVacancies(query) {
  let queries = convertQueryToArr(query);

  return (dispatch, getState) => {
    let { filters } = getState();

    dispatch(fetchVacanciesStart());

    Promise.all(queries.map(query => createGetPromise(query, filters)))
    .then((results) => {
      console.log(results);
      let vacancies = [].concat.apply([], results.map((res) => res.data));
      return filterUniqueVacancies(vacancies);
    })
    .then((vacancies) => {
      dispatch(fetchVacanciesSuccess(vacancies));
    })
    .catch((err) => {
      console.log(err);
      dispatch(fetchVacanciesErr());
    })
  }
}
