import styled from 'styled-components';
import * as palette from './colors';

export const Expand = styled.button`
  color: ${palette.ORANGE};
  text-align: center;
  background: transparent;
  display: inline-block;
  border: 0;
  transition: all .5s;
  margin: 0 auto;
  outline: none;
  font-size: 20px;
  &:hover {
    color: ${props => props.theme === 'light' ? `${palette.BLACK2}` : `${palette.WHITE}`};
    cursor: pointer;
  }
`;
