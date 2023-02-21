import styled, { css } from 'styled-components';

const commonButtonStyles = css`
  font-size: 18px;
  font-family: inherit;
  height: 56px;
  min-width: 248px;
  color: ${(props) => props.theme.text};
  cursor: pointer;
  letter-spacing: inherit;
  &:hover {
    opacity: 0.9;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  }
`;

export const StyledPrimary = styled.button`
  ${commonButtonStyles}
  background-color: ${(props) => props.theme.background};
  border: none;
`;

export const StyledSecondary = styled.button`
  ${commonButtonStyles}
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.background};
  border: none;
`;

export const StyledOutlined = styled.button`
  ${commonButtonStyles}
  background-color: rgba(36, 36, 36, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.5);
`;

export const StyledTransparent = styled.button`
  ${commonButtonStyles}
  background-color: transparent;
  border: none;
  font-weight: 700;
  min-width: initial;
  &:hover {
    box-shadow: none;
  }
`;
