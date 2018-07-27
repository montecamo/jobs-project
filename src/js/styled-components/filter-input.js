import styled from 'styled-components';
import * as palette from './colors';

const FilterInput = styled.input`
  width: 80px;
  background: transparent;
  box-sizing: border-box;
  border: 0;
  color: ${palette.WHITE};
  font-size: 21px;
  outline: none;
  padding: 0;
  margin-left: -15px;
  font-family: 'LatoLight', sans-serif;
`;

export default FilterInput;
