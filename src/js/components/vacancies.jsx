'use strict'

import React from 'react';
import { connect } from 'react-redux';

import Vacancy from './vacancy.jsx';
import Separator from './separator.jsx';
import VacanciesWrapper from '../styled-components/vacancies-wrapper';


function renderVacancies(data) {
  let vacancies = [];

  data.forEach((vacancy, index) => {
    vacancies.push(<Vacancy key={vacancy.id} vacancy={vacancy} />)
    vacancies.push(<Separator key={Math.random()}/>);
  });
  vacancies.pop();

  return vacancies;
}

const Vacancies = ({ vacancies }) => {
  return (
    <VacanciesWrapper>
      {renderVacancies(vacancies)}
    </VacanciesWrapper>
  )
}

const mapStateToProps = ({ vacancies }) => {
  return { 
    vacancies: vacancies.list,
  };
}
export default connect(mapStateToProps)(Vacancies);

