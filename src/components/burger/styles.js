import styled from 'styled-components';

const StyledBurger = styled.button`
  position: ${({ open }) => (open ? 'absolute' : 'relative')};
  top: ${({ open }) => (open ? '32px' : '15px')};
  right: ${({ open }) => (open ? '649px' : '0')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  width: ${({ open }) => (open ? '17px' : ' 27px')};
  height: ${({ open }) => (open ? '17px' : ' 16px')};
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  &:hover {
    opacity: 0.7;
  }

  div {
    height: 1px;
    width: ${({ open }) => (open ? '24px' : 'inherit')};
    background: ${(props) => props.theme.text};
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(49deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(314deg)' : 'rotate(0)')};
      width: ${({ open }) => (open ? '24px' : '17px')};
    }
  }
`;

export default StyledBurger;
