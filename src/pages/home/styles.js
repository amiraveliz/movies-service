import styled from 'styled-components';

const StyledContainer = styled.div`
  padding-top: 100px;
  background-image: url(${(props) => props.backgroundImage});
  height: calc(100% - 100px);
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

export default StyledContainer;
