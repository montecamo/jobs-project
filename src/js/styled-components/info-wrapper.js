import styled from 'styled-components';
import * as palette from './colors';

const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
  font-size: 30px;
  font-family: 'LatoLight', sans-serif;
  color: ${props => props.theme === 'light' ? `${palette.BLACK2}` : `${palette.WHITE}`};
`;

export default InfoWrapper;
