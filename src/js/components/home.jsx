import React, { Component } from 'react';
import { connect } from 'react-redux';

import Search from './search.jsx';
import Vacancies from './vacancies.jsx';
import Logo from './logo.jsx';
import Main from '../styled-components/main';
import Container from '../styled-components/container';

@connect()
export default class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Main>
        <Container align='flex-start' width='15%'>
          <Logo />
        </Container>
        <Container justify='flex-start' column width='60%'>
          <Search />
          <Vacancies />
        </Container>
      </Main>
    )
  }
}
