import styled from 'styled-components';
import * as palette from './colors';

export const Description = styled.div`
  color: ${palette.GREY};
  margin-bottom: 5px;
  line-height: 1.2em;
  max-height: ${props => props.expanded ? '' : '3.6em'};
  overflow: hidden;
  a {
    color: ${palette.ORANGE};
  }
`;
