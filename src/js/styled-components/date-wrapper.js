import styled from 'styled-components';
import * as palette from './colors';

const DateWrapper = styled.p`
  color: ${props => props.theme === 'light' ? `${palette.BLACK2}` : `${palette.WHITE}`};
  display: inline-block;
  float: right;
  transition: all .5s;
`;

export default DateWrapper;
