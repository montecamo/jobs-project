'use strict'
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Page, PagesWrapper } from '../styled-components';
import { switchPage } from '../actions/filtersActions';


function renderPages(current, maxPage, handler, theme) {
  let end = current + 2 > maxPage ? maxPage : current + 2;
  if (end - 5 < 0) end -= end - 5;
  if (end > maxPage) end = maxPage;
  
  let pages = [];
  for (let i = end, counter = 0; i >= 1 && counter < 5; i--) {
    pages.push(
      <Page onClick={handler} theme={theme} focused={current === i} id={i} key={i}>
        {i}
      </Page>
    );
    counter++;
  }
  return pages.reverse();
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Pages extends Component {
  render() {
    let { currentPage, maxPage, switchPage, theme } = this.props;

    return (
      <PagesWrapper>
        {renderPages(currentPage, maxPage, switchPage, theme)}
      </PagesWrapper>
    )
  }
}

function mapStateToProps({ filters, theme }) {
  return {
    currentPage: filters.currentPage,
    maxPage: filters.maxPage,
    theme: theme.type
  }
}

function mapDispatchToProps(dispatch) {
  return {
    switchPage: (e) => {
      dispatch(switchPage(+e.target.id));
    }
  }
}
