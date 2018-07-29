'use strict'
import React from 'react';
import { connect } from 'react-redux';

import Checkbox from './checkbox.jsx';
import { toggleSalaryOnly } from '../actions/filtersActions';


const SalaryOnlyFilter = ({ toggleFilter }) => (
  <Checkbox innerOnClick={toggleFilter}>with salary</Checkbox>
);

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFilter: () => {
      dispatch(toggleSalaryOnly());
    }
  }
}

export default connect(null, mapDispatchToProps)(SalaryOnlyFilter);
