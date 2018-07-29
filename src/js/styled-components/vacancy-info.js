import styled from 'styled-components';
import * as palette from './colors';

export const VacancyInfo = styled.h3`
  color: ${props => props.theme === 'light' ? `${palette.BLACK2}` : `${palette.WHITE}`};
  margin-bottom: 5px;
  transition: all .5s;
`;
