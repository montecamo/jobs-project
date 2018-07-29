'use strict'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import Checkbox from './checkbox.jsx';
import { FilterInput } from '../styled-components';
import { containsNumber } from '../containers/assets';
import { toggleLocationFilter, changeLocationFilter } from '../actions/filtersActions';


@connect(mapStateToProps, mapDispatchToProps)
export default class LocationFilter extends Component {
  constructor() {
    super();

    this.onChange = this.onChange.bind(this);
    this.toggleFilter = this.toggleFilter.bind(this);
  }
  
  onChange(e) {
    let { value } = e.target;
    console.log(containsNumber(value));
    if (containsNumber(value)) return;

    this.props.changeLocation(value);
  }

  toggleFilter(event) {
    console.log('checkbox click');
    this.props.toggleFilter();
  }

  render() {
    let { location, theme } = this.props;
    return (
      <div>
        <Checkbox inline={true} innerOnClick={this.toggleFilter}>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </Checkbox>
        <FilterInput 
          theme={theme}
          placeholder='loc.'
          width='120px'
          value={location}
          onChange={this.onChange} />
      </div>
    )
  }
}

function mapStateToProps({ filters, theme }) {
  return {
    location: filters.location.place,
    theme: theme.type
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleFilter: (value) => {
      dispatch(toggleLocationFilter());
    },
    changeLocation: (value) => {
      dispatch(changeLocationFilter(value));
    }
  }
}
