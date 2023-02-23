import styled from 'styled-components';
import Breakpoints from '../../global-styles/breakpoints';

export const StyledContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  padding: 15px 60px;
  box-sizing: border-box;
  top: 0;
  z-index: 1;
  @media (max-width: ${Breakpoints.screenMd}) {
    padding: 15px 24px;
  }
`;

export const StyledLogoSection = styled.div`
  gap: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
  @media (max-width: ${Breakpoints.screenMd}) {
    display: none;
  }
`;

export const StyledMenuSection = styled.div`
  gap: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
`;
