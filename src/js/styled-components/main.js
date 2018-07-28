import styled from 'styled-components';
import * as palette from './colors';

const Main = styled.div`
  background: ${props => props.theme === 'light' ? `${palette.WHITE}` : `${palette.BLACK1}`};
  min-height: 100%;
  display: flex;
  justify-content: center;
  font-family: 'Lato', sans-serif; 
  width: 100%;
  transition: all .5s;
`;

export default Main;
