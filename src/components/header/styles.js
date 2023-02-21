import styled from 'styled-components';

export const StyledContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  padding: 15px 60px;
  box-sizing: border-box;
  top: 0;
`;

export const StyledLogoSection = styled.div`
  gap: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
`;

export const StyledMenuSection = styled.div`
  gap: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
`;

export const StyledModalBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
