'use strict'
import axios from 'axios';


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

export function fetchVacancies(query) {
  return dispatch => {
    dispatch(fetchVacanciesStart());
    axios.get('http://82.146.40.234/job/')
    .then((res) => {
      console.log(res);
      return res.data;
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
