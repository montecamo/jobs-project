'use strict'
import React from 'react';
import { connect } from 'react-redux';

import { StyledSeparator } from '../styled-components';


const Separator = (props) => (
  <StyledSeparator {...props}></StyledSeparator>
);

const mapStateToProps = ({ theme }) => {
  return {
    theme: theme.type
  }
}

export default connect(mapStateToProps)(Separator);
