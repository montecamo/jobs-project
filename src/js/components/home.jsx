'use strict'
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Search from './search.jsx';
import Vacancies from './vacancies.jsx';
import Logo from './logo.jsx';
import Filters from './filters.jsx';
import Pages from './pages.jsx';
import Info from './info.jsx';
import { Main, Container1, Container2, Wrapper } from '../styled-components';
import { getTheme } from '../actions/themeActions';


@connect(mapStateToProps, mapDispatchToProps)
export default class Home extends Component { 
  componentDidMount() {
    this.props.getTheme();
  }

  render() {
    return (
      <Main theme={this.props.theme}>
        <Wrapper>
          <Container2  width='25%'>
            <Logo />
            <Filters />
          </Container2>
          <Container1 width='70%'>
            <Search />
            <Info />
            <Vacancies />
            <Pages />
          </Container1>
        </Wrapper>
      </Main>
    )
  }
 };

function mapStateToProps({ theme }) {
  return {
    theme: theme.type
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getTheme: () => {
      dispatch(getTheme());
    }
  }
}
