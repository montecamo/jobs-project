'use strict'

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchVacancies } from '../actions/vacanciesActions';
import { Input, SearchWrapper, Find } from '../styled-components';

@connect(null, mapDispatchToProps)
export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      text: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.fetchVacancies = this.fetchVacancies.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  fetchVacancies() {
    let query = this.state.text;
    if (!query) return;

    this.props.fetchVacancies(query);
  }

  render() {
    return (
      <SearchWrapper>
        <Input type='text' onChange={this.handleChange} />
        <Find type='submit' value='Find' onClick={this.fetchVacancies} />
      </SearchWrapper>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchVacancies: (query) => {
      dispatch(fetchVacancies(query));
    }
  }
}
