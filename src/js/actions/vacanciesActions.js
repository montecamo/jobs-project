'use strict'
import { setMaxPage } from './filtersActions';
import { setVacanciesFound } from './searchActions';
import { API_KEY, APP_ID, JOBS_PER_PAGE, MIN_SALARY } from '../constants';

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

export function createGetPromise(query, { location, page, salary }, extendedSearch=false) {
  const searchParams = new URLSearchParams();
  searchParams.append('app_id', APP_ID);
  searchParams.append('app_key', API_KEY);
  searchParams.append('results_per_page', JOBS_PER_PAGE);
  searchParams.append('sort_by', 'date');

  if (extendedSearch) {
    searchParams.append('what', query) 
  } else {
    searchParams.append('title_only', query) 
  }

  if (location) {
    searchParams.append('where', location);
  }

  if (salary) {
    searchParams.append('salary_min', salary);
  }

  return fetch(`https://api.adzuna.com/v1/api/jobs/us/search/${page}?${searchParams}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => {
      if (!res.ok) throw res;

      return res.json();
    });
}

export function fetchVacancies(query) {
  return (dispatch, getState) => {
    let params = {};
    let { filters } = getState();

    params.page = filters.currentPage
    filters.salaryOnly ? params.salary = MIN_SALARY : null;
    filters.minSalary.status ? params.salary = filters.minSalary.amount : null;
    filters.location.status ? params.location = filters.location.place : null;

    dispatch(fetchVacanciesStart());

    createGetPromise(query, params, filters.extendedSearch)
    .then((data) => {
      console.warn('data', data);
      let totalFound = data.count;
      let totalPages = Math.round(totalFound / JOBS_PER_PAGE);

      dispatch(setMaxPage(totalPages));
      dispatch(setVacanciesFound(totalFound));

      return data.results;
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
