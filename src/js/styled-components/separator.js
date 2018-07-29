import styled from 'styled-components';
import * as palette from './colors';

export const StyledSeparator = styled.div`
  height: 1px;
  width: 100%;
  background: ${props => props.theme === 'light' ? `${palette.BLACK2}` : `${palette.WHITE}`};
  margin: 30px 0;
  transition: all .5s;
`;
