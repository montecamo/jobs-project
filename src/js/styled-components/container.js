import styled from 'styled-components';

const Container = styled.div`
  display: inline-flex;
  width: ${props => props.width ? props.width : '50%'};
  ${props => props.column && 'flex-direction: column'};
  margin-left: ${props => props.marginLeft && props.marginLeft};
  min-height: 100%;
  align-items: ${props => props.align ? props.align : 'center'};
  justify-content: ${props => props.justify ? props.justify : 'center'};
  vertical-align: top;

  @media screen and (max-width: 600px) {
    ${props => props.shouldHide && 'display: none'};
    width: 100%;
  };
`;

export default Container;
