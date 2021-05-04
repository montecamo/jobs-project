'use strict'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ReactHtmlParser from 'react-html-parser';

import { 
  Wrapper, Expand, VacancyOffset, VacancyInfo, Salary, Description,
  DateWrapper, Title, Dollar
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
    let { title, company, redirect_url, created, location, salary_min: salary, description } = vacancy;
    
    let { month, day } = convertDate(created, {day: true, month: true});

    return (
      <div>
        <Title theme={theme} href={redirect_url}>{ReactHtmlParser(title)}</Title>
        <VacancyOffset>
          <VacancyInfo theme={theme} className='info'>{`${company.display_name} - ${location.display_name}`}</VacancyInfo>
          {salary && <Salary className='salary'>{salary}$</Salary>}
          <Description expanded={this.state.expanded}>
            {ReactHtmlParser(description)}
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
