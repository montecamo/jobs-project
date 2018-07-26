import React from 'react';
import { connect } from 'react-redux';

import Checkbox from './checkbox.jsx';
import { toggleSalaryOnly } from '../actions/filtersActions';

const SalaryFilter = (props) => (
  <Checkbox onClick={props.toggleSalaryFilter}>with salary</Checkbox>
)

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSalaryFilter: (e) => {
      dispatch(toggleSalaryOnly());
    }
  }
}

export default connect(null, mapDispatchToProps)(SalaryFilter);
