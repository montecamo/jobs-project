'use strict'

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchVacancies } from '../actions/vacanciesActions';
import { queryChange, scrollSearch } from '../actions/searchActions';
import { Input, SearchWrapper, Find } from '../styled-components';
import SalaryFilter from './salary-filter.jsx';

@connect(mapStateToProps, mapDispatchToProps)
export default class Search extends Component {
  constructor() {
    super();

    this.input = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.fetchVacancies = this.fetchVacancies.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(e) {
    let text = e.target.value;

    this.props.queryChange(text);

    if (text.length > 3) {
      this.fetchVacancies(text);
    }
  }

  scroll() {
    this.input.current.scrollIntoView();
    this.props.stopScroll();
  }

  fetchVacancies(text) {
    let query;
    if (typeof text === 'string') {
      query = text;
    } else {
      query = this.props.query;
    }
    if (!query) return;

    this.props.fetchVacancies(query);
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.fetchVacancies();
      this.input.current.blur();
    }
  }

  componentDidUpdate() {
    if (this.props.scroll) {
      this.scroll();
    }
  }

  render() {
    return (
      <SearchWrapper>
        <Input 
          type='text'
          innerRef={this.input}
          value={this.props.query}
          onKeyPress={this.handleKeyPress}
          onChange={this.handleChange} />
        <Find type='submit' value='Find' onClick={this.fetchVacancies} />
      </SearchWrapper>
    )
  }
}

function mapStateToProps({ search }) {
  return {
    query: search.query,
    scroll: search.scroll
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchVacancies: (query) => {
      dispatch(fetchVacancies(query));
    },
    queryChange: (query) => {
      dispatch(queryChange(query));
    },
    stopScroll: () => {
      dispatch(scrollSearch(false));
    }
  }
}
