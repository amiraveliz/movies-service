import styled from 'styled-components';
import Breakpoints from '../../../global-styles/breakpoints';

export const StyledContainer = styled.div`
  grid-area: 1 / 4 / 3 / 5;
  display: flex;
  padding-right: 60px;
  flex-direction: column;
  align-items: end;
  @media (max-width: ${Breakpoints.screenMd}) {
    padding: 64px 0;
    align-items: center;
    width: 100%;
  }
`;

export const StyledTitle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 24px;
  min-width: 200px;
`;

export const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${Breakpoints.screenMd}) {
    width: 100%;
    padding: 0 24px;
    gap: 24px;
  }
`;
