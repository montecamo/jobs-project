import styled from 'styled-components';
import * as palette from './colors';

export const FiltersButton = styled.button`
  width: 40px;
  height: 40px;
  background: transparent;
  border: 1px solid ${palette.ORANGE};
  border-radius: 20%;
  z-index: 9999;
  display: block;
  margin-top: 5px;
  margin-right: 5px;
  float: right;
  outline: none;
  position: relative;

  span {
    position: absolute;
    top: 50%;
    margin-top: -1px;
    left: 50%;
    margin-left: -10px;
    width: 20px;
    height: 2px
    background: ${palette.ORANGE};
    ${props => props.active && 'height: 0'};

    &:before {
      position: absolute;
      top: 50%;
      margin-top: -1px;
      transform: translateY(-5px);
      left: 50%;
      margin-left: -10px;
      width: 20px;
      height: 2px
      background: ${palette.ORANGE};
      display: block;
      transition: .3s;
      content: '';
      ${props => props.active && 'transform: rotate(45deg)'};
    }
    &:after {
      position: absolute;
      top: 50%;
      margin-top: -1px;
      transform: translateY(5px);
      left: 50%;
      margin-left: -10px;
      width: 20px;
      height: 2px
      background: ${palette.ORANGE};
      display: block;
      transition: .3s;
      content: '';
      ${props => props.active && 'transform: rotate(-45deg)'};
    }
  };
  @media screen and (min-width: 700px) {
    display: none;
  }
`;
