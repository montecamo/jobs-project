'use strict'

import React from 'react';
import { connect } from 'react-redux';

import Vacancy from './vacancy.jsx';
import Separator from './separator.jsx';
import VacanciesWrapper from '../styled-components/vacancies-wrapper';


function renderVacancies(data, filters) {
  let vacancies = [];
  
  data.forEach((vacancy, index) => {
    if (filters.salaryOnly) {
      if (!vacancy.salary) return;
    }

    vacancies.push(<Vacancy key={vacancy.id} vacancy={vacancy} />)
    vacancies.push(<Separator key={Math.random()}/>);
  });
  vacancies.pop();

  return vacancies;
}

const Vacancies = ({ vacancies, filters }) => {
  return (
    <VacanciesWrapper>
      {renderVacancies(vacancies, filters)}
    </VacanciesWrapper>
  )
}

const mapStateToProps = ({ vacancies, filters }) => {
  return { 
    vacancies: vacancies.list,
    filters 
  };
}

export default connect(mapStateToProps)(Vacancies);
