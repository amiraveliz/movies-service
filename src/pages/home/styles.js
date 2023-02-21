import styled from 'styled-components';

const StyledContainer = styled.div`
  padding-top: 150px;
  background-image: url(${(props) => props.backgroundImage});
  height: calc(100% - 150px);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: end;
`;

export default StyledContainer;
