import React from 'react';
import { connect } from 'react-redux';

import Vacancy from './vacancy.jsx';
import Separator from './separator.jsx';
import VacanciesWrapper from '../styled-components/vacancies-wrapper';

const Vacancies = ({ vacancies }) => {
  let vacancies_arr = [];
  
  vacancies.forEach((vacancy, index) => {
    vacancies_arr.push(<Vacancy key={vacancy.id} vacancy={vacancy} />)
    vacancies_arr.push(<Separator key={Math.random()}/>);
  });
  vacancies_arr.pop();

  return (
    <VacanciesWrapper>
      {vacancies_arr}
    </VacanciesWrapper>
  )

}

const mapStateToProps = ({ vacancies }) => {
  return { 
    vacancies: vacancies.list
  };
}

export default connect(mapStateToProps)(Vacancies);
