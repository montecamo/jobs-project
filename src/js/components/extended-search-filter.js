import React from 'react';
import { connect } from 'react-redux';

import Checkbox from './checkbox.jsx';
import { toggleExtendedSearch } from '../actions/filtersActions';

const ExtendedSearchFilter = (props) => (
  <Checkbox onClick={props.toggleExtendedSearchFilter}>extended search</Checkbox>
)

const mapDispatchToProps = (dispatch) => {
  return {
    toggleExtendedSearchFilter: (e) => {
      dispatch(toggleExtendedSearch());
    }
  }
}

export default connect(null, mapDispatchToProps)(ExtendedSearchFilter);
