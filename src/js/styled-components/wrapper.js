import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: center;

  ${props => !props.preventDefault && `@media screen and (max-width: 700px) {
    display: block;
    flex-wrap: wrap;
    justify-content: ;
    align-items: center;
  }`};
`;

 export default Wrapper;
