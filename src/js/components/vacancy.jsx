'use strict'

import React, { Component } from 'react';
import styled from 'styled-components';
import ReactHtmlParser from 'react-html-parser';

import { Wrapper, Expand, VacancyOffset, VacancyInfo, Salary, Description, DateWrapper, Title } from '../styled-components';
import { convertDate } from '../containers/assets';

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
    let { title, company, url, date, location, salary, currency, description } = this.props.vacancy;
   
    let Desc = ReactHtmlParser(description);
    let { month, day } = convertDate(date, {day: true, month: true});

    return (
      <div>
        <Title href={url}>{title}</Title>
        <VacancyOffset>
          <VacancyInfo className='info'>{`${company} - ${location}`}</VacancyInfo>
          {salary && <Salary className='salary'>{`${salary} ${currency}`}</Salary>}
          <Description expanded={this.state.expanded}>
            {Desc}
          </Description>
        </VacancyOffset>
        <Wrapper>
          <Expand onClick={this.toggle}>...</Expand> 
          <DateWrapper>{`${month} ${day}`}</DateWrapper>
        </Wrapper>
      </div>
    )
  }
}
