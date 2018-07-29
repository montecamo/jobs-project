import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: center;

  ${props => !props.preventDefault && `@media screen and (max-width: 700px) {
    display: block;
    ${props => props.shouldHide && 'display: none'};
    flex-wrap: wrap;
    justify-content: ;
    align-items: center;
  }`};
`;
