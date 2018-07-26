import styled from 'styled-components';
import * as palette from './colors';

const LogoWrapper = styled.p`
  box-sizing: border-box;
  color: ${palette.ORANGE};
  font-size: 150px;
  font-family: 'Baiti', sans-serif;
  padding-top: -35px;
  @media screen and (max-width: 600px) {
    font-size: 24px;
  }
`;

export default LogoWrapper;
