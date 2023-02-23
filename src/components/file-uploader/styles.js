import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const StyledDrandAndDropZone = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 48px;
  margin-bottom: 24px;
  border: ${(props) => `1px dashed ${props.theme.text}`};
  background-color: ${(props) => props.theme.backgroudColor};
  outline: none;
  height: 100px;
  width: 602px;
`;

export const StyledDragAndDropDetails = styled.span`
  cursor: default;
`;

export const StyledSubmitButton = styled.div`
  margin-top: 48px;
`;

export const StyledSuccessTitle = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 70px;
  margin-bottom: 24px;
`;

export const StyledSuccessSubtitle = styled.span`
  font-size: 1.25rem;
  margin-bottom: 92px;
`;
