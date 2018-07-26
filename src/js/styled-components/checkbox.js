import styled from 'styled-components';
import * as palette from './colors';

export const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background: transparent;
  border: 1px solid ${palette.ORANGE};
  box-sizing: border-box;
  transition: all .5s;
  &:after {
    content: "";
    position: absolute;
    display: none;
    left: 8px;
    top: 4px;
    width: 5px;
    height: 10px;
    border: solid ${palette.WHITE};
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`;

export const Container = styled.label`
  color: ${palette.ORANGE};
  cursor: pointer;
  font-size: 21px;
  font-family: 'LatoLight', sans-serif;
  padding-left: 33px;
  display: block;
  position: relative;
  margin: 15px 0;
`;

export const CheckboxInput = styled.input`
  opacity: 0;
  cursor: pointer;
  &:checked ~ ${Checkmark} {
    background: ${palette.ORANGE};
  }
  &:checked ~ ${Checkmark}:after {
    display: block;
  }
`;
