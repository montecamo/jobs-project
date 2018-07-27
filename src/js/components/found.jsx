'use strict'
import React from 'react';
import { connect } from 'react-redux';

import { FoundWrapper } from '../styled-components';

const Found = ({ found }) => (
  found ? <FoundWrapper>~ {found} vacancies found</FoundWrapper> : null
);

const mapStateToProps = ({ search }) => {
  return {
    found: search.found
  }
};

export default connect(mapStateToProps)(Found);
