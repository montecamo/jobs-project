import styled from 'styled-components';

export const Container1 = styled.div`
  display: inline-flex;
  width: ${props => props.width ? props.width : '50%'};
  flex-direction: column;
  margin-left: ${props => props.marginLeft && props.marginLeft};
  min-height: 100%;
  align-items: ${props => props.align ? props.align : 'center'};
  justify-content: flex-start;
  vertical-align: top;

  @media screen and (max-width: 700px) {
    display: flex;
    width: 100%;
    min-height: auto;
  };
`;

export const Container2 = Container1.extend`
  @media screen and (max-width: 700px) {
    flex-direction: row;
    display: flex;
    justify-content: flex-start;
    width: 100%;
    min-height: auto;
  };
`;
