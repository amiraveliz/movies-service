import styled from 'styled-components';
import Breakpoints from '../../global-styles/breakpoints';

const StyledContainer = styled.div`
  padding-top: 100px;
  background-image: url(${(props) => props.backgroundImage});
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  animation: fade-in-featured 4s forwards ease-in-out;
  @media (max-width: ${Breakpoints.screenMd}) {
    display: flex;
    flex-direction: column;
    background-position: center;
    background: linear-gradient(
        0deg,
        rgba(36, 36, 36, 1) 0%,
        rgba(36, 36, 36, 0) 35%
      ),
      url(${(props) => props.backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    height: 95%;
  }

  @keyframes fade-in-featured {
    0% {
      opacity: 0;
      transform: scale(1.5);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export default StyledContainer;
