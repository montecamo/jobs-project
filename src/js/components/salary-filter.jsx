import React, { Component } from 'react';
import { connect } from 'react-redux';

import Checkbox from './checkbox.jsx';
import { FilterInput, Dollar } from '../styled-components';
import { toggleSalaryFilter, changeSalaryFilterAmount } from '../actions/filtersActions';

@connect(mapStateToProps, mapDispatchToProps)
export default class SalaryFilter extends Component {
  constructor() {
    super();

    this.state = {
      value: 0
    };

    this.onChange = this.onChange.bind(this);
    this.toggleFilter = this.toggleFilter.bind(this);
  }
  
  onChange(e) {
    let { value } = e.target;
    console.log(isNaN(+value));
    if (isNaN(+value)) return;

    this.props.changeAmount(value);
  }

  toggleFilter() {
    this.props.toggleSalaryFilter(this.state.value);
  }

  render() {
    return (
      <div>
        <Checkbox inline={true} onClick={this.toggleFilter}>
          min $
        </Checkbox>
        <FilterInput value={this.props.amount} onChange={this.onChange} />
      </div>
    )
  }
}

function mapStateToProps({ filters }) {
  return {
    amount: filters.minSalary.amount
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleSalaryFilter: (value) => {
      dispatch(toggleSalaryFilter(value));
    },
    changeAmount: (value) => {
      dispatch(changeSalaryFilterAmount(value));
    }
  }
}
