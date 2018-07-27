'use strict'
import axios from 'axios';
import { convertQueryToArr, filterUniqueVacancies } from '../containers/assets';
import { setMaxPage } from './filtersActions';

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
  return Promise.all([
    createGetPromise(query, params),
    createGetPromise(query, params, 'description')
  ]);
}

export function createGetPromise(query, params, searchPlace='title') {
  if (searchPlace === 'title') {
    params = {...params, title: query };
  } else if (searchPlace === 'description') {
    params = {...params, description: query };
  }

  return axios.get('http://159.65.200.195/job/search', {params});
}

export function fetchVacancies(query) {
  let queries = convertQueryToArr(query);
  console.log(queries);

  return (dispatch, getState) => {
    dispatch(fetchVacanciesStart());

    let { filters } = getState();
    let params = {
      page: filters.currentPage,
    };

    filters.salaryOnly ? params.salary = 0 : null;

    let createPromise;
    if (filters.extendedSearch) {
      createPromise = createExtendedGetPromise;
    } else {
      createPromise = createGetPromise;
    }

    Promise.all(queries.map(query => createPromise(query, params)))
    .then((results) => {
      console.log(results);
      let temp = [].concat.apply([], results);
      let pagesLenghts = [];
      let totalFounds = [];
      results = [].concat.apply([], temp.map((res) => {
        pagesLenghts.push(res.headers.totalpage);
        totalFounds.push(res.headers.totalfound);
        return res.data;
      }));
      dispatch(setMaxPage(Math.max.apply(null, pagesLenghts)));
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
