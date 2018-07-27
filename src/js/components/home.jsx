'use strict'

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Search from './search.jsx';
import Vacancies from './vacancies.jsx';
import Logo from './logo.jsx';
import Filters from './filters.jsx';
import Pages from './pages.jsx';
import { Main, Container, Wrapper } from '../styled-components';


const Home = () => (
  <Main>
    <Wrapper>
    <Container column justify='flex-start' width='25%'>
      <Logo />
      <Filters />
    </Container>
    <Container justify='flex-start' column width='70%'>
      <Search />
      <Vacancies />
      <Pages />
    </Container>
    </Wrapper>
  </Main>
);

export default Home;
