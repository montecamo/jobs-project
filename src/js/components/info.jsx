import React, { Component } from 'react';
import { connect } from 'react-redux';

import { InfoWrapper } from '../styled-components';

const Info = ({ theme, vacancies, found }) => {
  let value;
  if (typeof found === 'number' && found === 0) {
    value = '404';
  } else if(vacancies.length === 0) {
    value = 'Your future job is near';
  }

  return <InfoWrapper theme={theme}>{value}</InfoWrapper>
}

const mapStateToProps = ({ theme, search, vacancies }) => {
  return {
    found: search.found,
    vacancies: vacancies.list,
    theme: theme.type
  }
}

export default connect(mapStateToProps)(Info);
