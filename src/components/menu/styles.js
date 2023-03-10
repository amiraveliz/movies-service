import styled from 'styled-components';
import Breakpoints from '../../global-styles/breakpoints';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  height: 100vh;
  text-align: left;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  transition: all 0.3s ease-in-out;
  z-index: 2;
  width: 761px;
  padding: 137px 108px 0 88px;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);

  @media (max-width: ${Breakpoints.screenMd}) {
    width: 100%;
    padding: 114px 24px 24px 24px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: baseline;
  }

  div > span {
    font-size: 1.37rem;
    text-decoration: none;
    transition: color 0.3s linear;
    color: inherit;
    padding: 20px 0;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const StyledOptions = styled.section`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 15px;
  right: 60px;
  width: 106px;

  @media (max-width: ${Breakpoints.screenMd}) {
    width: 65px;
    right: 0;
    button {
      display: none;
    }
  }
`;

export const StyledLogoContainer = styled.div`
  display: none;
  @media (max-width: ${Breakpoints.screenMd}) {
    display: block;
    position: absolute;
    top: 38px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
