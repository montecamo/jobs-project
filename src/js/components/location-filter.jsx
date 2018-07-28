import React, { Component } from 'react';
import { connect } from 'react-redux';

import Checkbox from './checkbox.jsx';
import { FilterInput,  } from '../styled-components';
import { containsNumber } from '../containers/assets';
import { toggleLocationFilter, changeLocationFilter } from '../actions/filtersActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


@connect(mapStateToProps, mapDispatchToProps)
export default class LocationFilter extends Component {
  constructor() {
    super();

    this.state = {
      text: 0
    };

    this.onChange = this.onChange.bind(this);
    this.toggleFilter = this.toggleFilter.bind(this);
  }
  
  onChange(e) {
    let { value } = e.target;
    if (containsNumber(value)) return;

    this.props.changeLocation(value);
  }

  toggleFilter() {
    this.props.toggleLocationFilter(this.state.value);
  }

  render() {
    let { location, theme } = this.props;
    console.log(theme);
    return (
      <div>
        <Checkbox inline={true} onClick={this.toggleFilter}>
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        </Checkbox>
        <FilterInput theme={theme} placeholder='loc.' value={location} onChange={this.onChange} />
      </div>
    )
  }
}

function mapStateToProps({ filters, theme }) {
  return {
    location: filters.location.location,
    theme: theme.type
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleLocationFilter: (value) => {
      dispatch(toggleLocationFilter(value));
    },
    changeLocation: (value) => {
      dispatch(changeLocationFilter(value));
    }
  }
}
