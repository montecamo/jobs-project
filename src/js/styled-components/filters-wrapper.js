import styled from 'styled-components';
import * as palette from './colors';

const FiltersWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 700px) {
    display: ${props => props.active ? 'flex' : 'none'};
    position: absolute;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: ${props => props.theme === 'light' ? `${palette.WHITE}` : `${palette.BLACK1}`};
  }
`;

export default FiltersWrapper;
