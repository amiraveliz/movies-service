import { useState } from 'react';
import PropTypes from 'prop-types';
import Burger from '../burger';
import Menu from '../menu';
import {
  StyledContainer,
  StyledOverlay,
  StyledMenuSection,
  StyledBellContainer,
  StyledLogoContainer,
} from './styles';
import { ReactComponent as Bell } from '../../assets/images/icons/bell.svg';
import { ReactComponent as Logo } from '../../assets/images/icons/logo.svg';
import Profile from '../../assets/images/profile.svg';
import Button from '../button';

function SidebarMenu({ onClickAddMovie }) {
  const [open, setOpen] = useState(false);
  return (
    <StyledContainer>
      <StyledOverlay isOpen={open} />
      <StyledLogoContainer>
        <Logo />
      </StyledLogoContainer>
      <StyledMenuSection>
        <Burger isOpen={open} setOpen={setOpen} />
        <Menu
          isOpen={open}
          setOpen={setOpen}
          onClickAddMovie={onClickAddMovie}
        />
        <StyledBellContainer>
          <Button variant="transparent" icon={Bell} />
        </StyledBellContainer>
        <img src={Profile} alt="Profile avatar" width="42" height="42" />
      </StyledMenuSection>
    </StyledContainer>
  );
}

SidebarMenu.propTypes = {
  onClickAddMovie: PropTypes.func,
};

SidebarMenu.defaultProps = {
  onClickAddMovie: () => {},
};

export default SidebarMenu;
