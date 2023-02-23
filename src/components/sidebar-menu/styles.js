import styled from 'styled-components';

export const StyledContainer = styled.div`
  /* position: relative; */
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
  justify-content: space-between;
  height: fit-content;
  /* position: relative;*/
`;
