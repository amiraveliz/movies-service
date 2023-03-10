import styled from 'styled-components';
import Breakpoints from '../../global-styles/breakpoints';

export const StyledModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 999;
`;

export const StyledOverlay = styled.span`
  position: absolute;
  height: 100vh;
  top: 0;
  z-index: 99;
  background: ${(props) => props.theme.background};
  left: 0;
  opacity: 0.5;
  width: 100vw;
`;

export const StyledContainer = styled.div`
  display: flex;
  padding: 1.5rem;
  position: relative;
  flex-direction: column;
  align-items: center;
  height: auto;
  margin: auto;
  width: fit-content;
  min-width: 730px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  border-radius: 10px;
  z-index: 999;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  @media (max-width: ${Breakpoints.screenMd}) {
    height: 100%;
    margin: 0;
    padding: 0;
    width: 100%;
    margin-top: 220px;
  }
`;

export const StyledHeader = styled.div`
  width: 100%;
  h2 {
    font-weight: 700;
    font-size: 1.25rem;
    color: ${(props) => props.theme.primary};
    margin: 0;
    text-align: center;
  }
`;

export const StyledCloseButton = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  height: 2.81rem;
  @media (max-width: ${Breakpoints.screenMd}) {
    display: none;
  }
`;

export const StyledCancelButton = styled.div`
  display: none;
  @media (max-width: ${Breakpoints.screenMd}) {
    display: block;
    margin-top: 16px;
  }
`;
