'use strict'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ReactHtmlParser from 'react-html-parser';

import { 
  Wrapper, Expand, VacancyOffset, VacancyInfo, Salary, Description,
  DateWrapper, Title 
} from '../styled-components';
import { convertDate } from '../containers/assets';


@connect(mapStateToProps)
export default class Vacancy extends Component {
  constructor() {
    super();

    this.state = {
      expanded: false
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState((state) => {
      return {
        expanded: !state.expanded
      }
    })
  }

  render() {
    let { theme, vacancy } = this.props;
    let { title, company, link, updated, location, salary, currency, snippet } = vacancy;
   
    let Desc = ReactHtmlParser(snippet);
    let { month, day } = convertDate(updated, {day: true, month: true});

    return (
      <div>
        <Title theme={theme} href={link}>{title}</Title>
        <VacancyOffset>
          <VacancyInfo theme={theme} className='info'>{`${company} - ${location}`}</VacancyInfo>
          {salary && <Salary className='salary'>{salary}</Salary>}
          <Description expanded={this.state.expanded}>
            {Desc}
          </Description>
        </VacancyOffset>
        <Wrapper>
          <Expand theme={theme} onClick={this.toggle}>...</Expand> 
          <DateWrapper theme={theme}>{`${month} ${day}`}</DateWrapper>
        </Wrapper>
      </div>
    )
  }
}

function mapStateToProps({ theme }) {
  return {
    theme: theme.type
  }
}
