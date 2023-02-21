import styled from 'styled-components';

export const StyledContainer = styled.div`
  padding: 0 60px;
  max-width: 943px;
`;

export const StyledSubtitle = styled.div`
  font-size: 20px;
  margin-left: 4px;
  margin-bottom: 20px;
  & span {
    font-weight: 700;
  }
`;
export const StyledTitle = styled.div`
  font-size: 120px;
  font-weight: 700;
  color: ${(props) => props.theme.primary};
  letter-spacing: 16px;
  margin-bottom: 32px;
`;

export const StyledActions = styled.div`
  display: flex;
  gap: 24px;
  padding-bottom: 120px;
`;
