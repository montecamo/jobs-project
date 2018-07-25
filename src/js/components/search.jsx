import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchVacancies } from '../actions/vacanciesActions';
import Input from '../styled-components/input';
import SearchWrapper from '../styled-components/search-wrapper'
import Find from '../styled-components/find';

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
    this.props.fetchVacancies();
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
