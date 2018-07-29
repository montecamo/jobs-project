import styled from 'styled-components';
import * as palette from './colors';

const LogoWrapper = styled.p`
  box-sizing: border-box;
  color: ${palette.ORANGE};
  font-size: 150px;
  font-family: 'Baiti', sans-serif;
  padding-bottom: 35px;
  cursor: pointer;
  transition: all .5s;
  @media screen and (max-width: 700px) {
    font-size: 50px;
    float: left;
    padding-bottom: 0;
    margin-left: 10px;
    margin-top: 5px;
  };
  &:hover {
    color: ${props => props.theme === 'light' ? `${palette.BLACK1}` : `${palette.WHITE}`};
  };
`;

export default LogoWrapper;
