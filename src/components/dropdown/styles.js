import styled, { css } from 'styled-components';

const commonListItemStyles = css`
  list-style: none;
  cursor: pointer;
`;

export const StyledContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

export const DropdownHeader = styled.span`
  color: ${(props) => props.theme.text};
  font-size: 18px;
  font-weight: 700;
`;

export const DropdownListContainer = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  z-index: 999;
  width: 241px;
  height: 96px;
  padding: 24px;
  background: ${(props) => props.theme.background};
  box-sizing: border-box;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
`;

export const DropdownList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 16px;
  color: ${(props) => props.theme.text};
`;

export const ListItem = styled.li`
  ${commonListItemStyles};
`;

export const ListItemSelected = styled.li`
  ${commonListItemStyles}
  font-weight: 700;
`;

export const DropdownPointer = styled.span`
  position: absolute;
  width: 12px;
  height: 12px;
  right: 26px;
  top: calc(100% + 4px);
  background: ${(props) => props.theme.background};
  transform: rotate(45deg);
  z-index: 999;
`;

export const ListItemSelectedContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
