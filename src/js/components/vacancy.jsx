import React, { Component } from 'react';
import styled from 'styled-components';
import * as palette from '../styled-components/colors';
import ReactHtmlParser from 'react-html-parser';

const Margin = styled.div`
  padding: 0 20px;
`;

const Title = styled.a`
  font-size: 24px;
  text-decoration: none;
  margin-bottom: 10px;
  padding: 1px;
  display: block;
  color: ${palette.WHITE};
  transition: all .5s;
  &:hover {
    color: ${palette.ORANGE};
    cursor: pointer;
  }
`;

const Info = styled.h3`
  color: ${palette.WHITE};
  margin-bottom: 5px;
`;

const Salary = styled.h3`
  color: ${palette.ORANGE};
  margin-bottom: 5px;
`;

const Description = styled.div`
  color: grey;
  margin-bottom: 5px;
  height: 59px;
  overflow: hidden;
`;

const DateWrapper = styled.p`
  color: ${palette.WHITE};
  text-align: right;
`;


export default class Vacancy extends Component {
  render() {
    let { title, company, url, date, location, salary, currency, description } = this.props.vacancy;
    const monthes = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    let Desc = ReactHtmlParser(description);
    let convertedDate = new Date(date);
    let month = monthes[convertedDate.getMonth()];
    let day = convertedDate.getDate(0);

    return (
      <div className='vacancy'>
        <Title href={url}>{title}</Title>
        <Margin>
          <Info className='info'>{`${company, location}`}</Info>
          {salary && <Salary className='salary'>{`${salary} ${currency}`}</Salary>}
          <Description>
            {Desc}
          </Description>
        </Margin>
        <DateWrapper>{`${month} ${day}`}</DateWrapper>
      </div>
    )
  }
}
