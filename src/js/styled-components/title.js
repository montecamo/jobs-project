import styled from 'styled-components';
import * as palette from './colors';

const Title = styled.a`
  font-size: 24px;
  text-decoration: none;
  margin-bottom: 10px;
  padding: 1px;
  display: block;
  color: ${palette.WHITE};
  transition: all .5s;
  &:hover {
    color: ${palette.ORANGE};
    cursor: pointer;
  }
`;

export default Title;
