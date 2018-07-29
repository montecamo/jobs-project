'use strict'
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchVacancies } from '../actions/vacanciesActions';
import { queryChange, scrollSearch } from '../actions/searchActions';
import { changePage } from '../actions/filtersActions';
import { Input, SearchWrapper, Find } from '../styled-components';
import Found from './found.jsx';
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
    let { value } = e.target;

    this.props.queryChange(value);

    if (value.length > 3) {
      this.fetchVacancies(value);
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
    //if (!query) return;

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
    let { query, theme } = this.props;
    return (
      <SearchWrapper>
        <Input 
          theme={theme}
          innerRef={this.input}
          value={query}
          onKeyPress={this.handleKeyPress}
          onChange={this.handleChange} />
        <Find type='submit' value='Find' onClick={this.fetchVacancies} />
        <Found />
      </SearchWrapper>
    )
  }
}

function mapStateToProps({ search, theme }) {
  return {
    query: search.query,
    scroll: search.scroll,
    theme: theme.type
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchVacancies: (query) => {
      dispatch(fetchVacancies(query));
      dispatch(changePage(1));
    },
    queryChange: (query) => {
      dispatch(queryChange(query));
    },
    stopScroll: () => {
      dispatch(scrollSearch(false));
    }
  }
}
