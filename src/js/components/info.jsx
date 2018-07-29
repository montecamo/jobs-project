'use strict'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faSpin } from '@fortawesome/free-solid-svg-icons';

import { InfoWrapper } from '../styled-components';


const Info = ({ state, theme, vacancies, found }) => {
  let title;
  switch(state) {
  case 'loading':
    title = <FontAwesomeIcon className='fa-spin' icon={faSpinner} />;
    break;
  case 'err':
    title = 'Err.';
    break;
  case 'welcome':
    title = 'Your future job is near';
    break;
  case 'not-found':
    title = '404';
    break;
  }

  return <InfoWrapper theme={theme}>{title}</InfoWrapper>
}

const mapStateToProps = ({ theme, search, vacancies }) => {
  return {
    found: search.found,
    vacancies: vacancies.list,
    state: vacancies.status,
    theme: theme.type
  }
}

export default connect(mapStateToProps)(Info);
