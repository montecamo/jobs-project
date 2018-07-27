import styled from 'styled-components';
import * as palette from './colors';

const Description = styled.div`
  color: grey;
  margin-bottom: 5px;
  line-height: 1.2em;
  max-height: ${props => props.expanded ? '' : '3.6em'};
  overflow: hidden;
  a {
    color: ${palette.ORANGE};
  }
`;

export default Description;
