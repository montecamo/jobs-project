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

export function createExtendedGetPromise(query, params) {
  let params1 = {...params, title: query};
  let params2 = {...params, description: query};
  return Promise.all([createGetPromise(query, params1), createGetPromise(query, params2)])
}

export function createGetPromise(query, params) {
  return axios.get('http://82.146.40.234/job/search', {params});
}

export function fetchVacancies(query) {
  let queries = convertQueryToArr(query);

  return (dispatch, getState) => {
    let { filters } = getState();
    let params = {};

    dispatch(fetchVacanciesStart());

    let createPromise;
    if (filters.extendedSearch) {
      createPromise = createExtendedGetPromise;
    } else {
      createPromise = createGetPromise;
      params.title = query;
    }

    Promise.all(queries.map(query => createPromise(query, params)))
    .then((results) => {
      let temp = [].concat.apply([], results);
      results = [].concat.apply([], temp.map((res) => res.data));
      return filterUniqueVacancies(results);
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
