'use strict'
import axios from 'axios';
import { convertQueryToArr, filterUniqueVacancies, sum, sortByDate } from '../containers/assets';
import { setMaxPage } from './filtersActions';
import { setVacanciesFound } from './searchActions';
import { API_KEY, JOBS_PER_PAGE, MIN_SALARY } from '../constants';

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

export function createGetPromise(query, params, extendedSearch=false) {
  if (extendedSearch) {
    params = {...params, searchMode: 3 };
  } else {
    params = {...params, searchMode: 1 };
  }

  params.keywords = query;

  return axios.post(`https://cors-anywhere.herokuapp.com/https://us.jooble.org/api/${API_KEY}`, {...params});
}

export function fetchVacancies(query) {
  return (dispatch, getState) => {
    let params = {};
    let { filters } = getState();

    params.page = filters.currentPage
    filters.salaryOnly ? params.salary = MIN_SALARY : null;
    filters.minSalary.status ? params.salary = filters.minSalary.amount : null;
    filters.location.status ? params.location = filters.location.place : null;

    if (!query && !params.location) {
      return;
    }

    dispatch(fetchVacanciesStart());

    createGetPromise(query, params, filters.extendedSearch)
    .then((res) => {
      return res.data;
    })
    .then((data) => {
      let totalFound = data.totalCount;
      let totalPages = Math.round(totalFound / JOBS_PER_PAGE);

      dispatch(setMaxPage(totalPages));
      dispatch(setVacanciesFound(totalFound));
      return data.jobs;
    })
    .then((vacancies) => {
      return sortByDate(vacancies, 'updated');
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
