import React from 'react';
import { connect } from 'react-redux';

import Checkbox from './checkbox.jsx';
import { toggleSalaryOnly } from '../actions/filtersActions';

const SalaryOnlyFilter = (props) => (
  <Checkbox onClick={props.toggleSalaryOnlyFilter}>with salary</Checkbox>
)

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSalaryOnlyFilter: (e) => {
      dispatch(toggleSalaryOnly());
    }
  }
}

export default connect(null, mapDispatchToProps)(SalaryOnlyFilter);
