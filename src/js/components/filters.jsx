'use strict'
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Wrapper, FiltersButton, FiltersWrapper, StyledFilters } from '../styled-components';
import SalaryOnlyFilter from './salary-only-filter.jsx';
import ExtendedSearchFilter from './extended-search-filter.jsx';
import SalaryFilter from './salary-filter.jsx';
import LocationFilter from './location-filter.jsx';

@connect(mapStateToProps)
export default class Filters extends Component { 
  constructor() {
    super();

    this.state = {
      active: false
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState((state) => {
      return { 
        active: !state.active 
      }
    })
  }

  render() {
    let { active } = this.state;
    return (
      <Wrapper>
        <FiltersButton active={active} onClick={this.toggle}><span></span></FiltersButton>
        <FiltersWrapper theme={this.props.theme} active={active}>
          <StyledFilters>
            <SalaryOnlyFilter /> 
            <ExtendedSearchFilter />
            <SalaryFilter />
            <LocationFilter />
          </StyledFilters>
        </FiltersWrapper>
      </Wrapper>
    );
  }
}

function mapStateToProps({ theme }) {
  return {
    theme: theme.type
  }
}
