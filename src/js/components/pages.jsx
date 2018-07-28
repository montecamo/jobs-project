'use strict'

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Page, PagesWrapper } from '../styled-components';
import { switchPage } from '../actions/filtersActions';

function renderPages(current, maxPage, click, theme) {
  let start, end;
  let pages = [];
  if (current + 2 > maxPage) {
    console.log('1');
    if (maxPage > 4) {
      start = maxPage - 4;
    } else if (maxPage > 3) {
      start = maxPage - 3;
    } else if (maxPage > 2) {
      start = maxPage - 2;
    } else if (maxPage > 1) {
      start = maxPage - 1;
    } else {
      start = 1;
    }
    end = maxPage;
  } else if (current > 3) {
    console.log('2');
    start = current - 2;
    end = current + 2;
  } else {
    console.log('3');
    start = 1;
    end = maxPage > 4 ? 5 : maxPage;
  }

  for (let i = start; i <= end; i++) {
    pages.push(<Page onClick={click} theme={theme} focused={current === i} id={i} key={i}>{i}</Page>);
  }

  return pages;
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
