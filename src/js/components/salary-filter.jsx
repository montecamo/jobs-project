'use strict'
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Checkbox from './checkbox.jsx';
import { FilterInput, Dollar } from '../styled-components';
import { toggleSalaryFilter, changeSalaryFilterAmount } from '../actions/filtersActions';


@connect(mapStateToProps, mapDispatchToProps)
export default class SalaryFilter extends Component {
  constructor() {
    super();

    this.onChange = this.onChange.bind(this);
    this.toggleFilter = this.toggleFilter.bind(this);
  }
  
  onChange(e) {
    let { value } = e.target;
    if (isNaN(+value)) return;

    this.props.changeAmount(value);
  }

  toggleFilter() {
    this.props.toggleFilter(this.props.amount);
  }

  render() {
    let { amount, theme } = this.props;
    return (
      <div>
        <Checkbox inline={true} innerOnClick={this.toggleFilter}>
          min $
        </Checkbox>
        <FilterInput theme={theme} placeholder='0' value={amount} onChange={this.onChange} />
      </div>
    )
  }
}

function mapStateToProps({ filters, theme }) {
  return {
    amount: filters.minSalary.amount,
    theme: theme.type
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleFilter: (amount) => {
      dispatch(toggleSalaryFilter(amount));
    },
    changeAmount: (amount) => {
      dispatch(changeSalaryFilterAmount(amount));
    }
  }
}
