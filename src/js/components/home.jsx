'use strict'

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Search from './search.jsx';
import Vacancies from './vacancies.jsx';
import Logo from './logo.jsx';
import { Main, Container, Wrapper } from '../styled-components';


const Home = () => (
  <Main>
    <Wrapper>
    <Container shouldHide align='flex-start' width='25%'>
      <Logo />
    </Container>
    <Container justify='flex-start' column width='70%'>
      <Search />
      <Vacancies />
    </Container>
    </Wrapper>
  </Main>
);

export default Home;
