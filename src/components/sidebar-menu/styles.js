import styled from 'styled-components';
import Breakpoints from '../../global-styles/breakpoints';

export const StyledContainer = styled.div`
  @media (max-width: ${Breakpoints.screenMd}) {
    width: 100%;
  }
`;

export const StyledOverlay = styled.span`
  position: absolute;
  height: 100vh;
  top: 0;
  z-index: 1;
  background: ${(props) => props.theme.background};
  left: 0;
  opacity: 0.5;
  width: 100vw;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

export const StyledMenuSection = styled.div`
  gap: 40px;
  display: flex;
  justify-content: end;
  height: fit-content;
`;

export const StyledBellContainer = styled.div`
  @media (max-width: ${Breakpoints.screenMd}) {
    display: none;
  }
`;

export const StyledLogoContainer = styled.div`
  display: none;
  @media (max-width: ${Breakpoints.screenMd}) {
    display: block;
    position: absolute;
    top: 38px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
