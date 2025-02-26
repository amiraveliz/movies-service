import styled from 'styled-components';
import Breakpoints from '../../../global-styles/breakpoints';

export const StyledContainer = styled.div`
  padding: 0 60px;
  max-width: 943px;
  grid-area: 1 / 1 / 3 / 4;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media (max-width: ${Breakpoints.screenMd}) {
    min-height: 580px;
    align-items: center;
  }
`;

export const StyledSubtitle = styled.div`
  font-size: 1.125rem;
  margin-left: 4px;
  margin-bottom: 20px;
  & span {
    font-weight: 700;
  }
`;
export const StyledTitle = styled.div`
  font-size: 6.5rem;
  font-weight: 700;
  color: ${(props) => props.theme.primary};
  letter-spacing: 16px;
  margin-bottom: 32px;
  animation: slide-up 6s forwards;
  line-height: 110px;
  text-shadow: #4a4a4aa3 1px 0 10px;
  @keyframes slide-up {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    }
  }
  @media (max-width: ${Breakpoints.screenMd}) {
    text-align: center;
    line-height: 80px;
  }
`;

export const StyledActions = styled.div`
  display: flex;
  gap: 24px;
  padding-bottom: 60px;
  @media (max-width: ${Breakpoints.screenMd}) {
    padding-bottom: 0;
    flex-direction: column;
    gap: 16;
  }
`;
