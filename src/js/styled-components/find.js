import styled from 'styled-components';
import * as palette from './colors';

export const Find = styled.input`
  border: 1px solid ${palette.ORANGE};
  background: transparent;
  box-sizing: border-box;
  color: ${palette.ORANGE};
  font-family: LatoLight;
  float: right;
  font-size: 23px;
  outline: none;
  text-align: center;
  padding: 10px 0;
  transition: all .5s;
  vertical-align: top;
  width: 16%;
  &:hover {
    cursor: pointer;
    background: ${palette.ORANGE};
    color: ${palette.WHITE};
  }
  @media screen and (max-width: 730px) {
    display: block;
    width: 100%;
    float: none;
  }
`;
