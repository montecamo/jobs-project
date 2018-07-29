'use strict'
import React from 'react';
import { connect } from 'react-redux';

import Checkbox from './checkbox.jsx';
import { toggleExtendedSearch } from '../actions/filtersActions';


const ExtendedSearchFilter = ({ toggleFilter }) => (
  <Checkbox innerOnClick={toggleFilter}>extended search</Checkbox>
)

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFilter: () => {
      dispatch(toggleExtendedSearch());
    }
  }
}

export default connect(null, mapDispatchToProps)(ExtendedSearchFilter);
