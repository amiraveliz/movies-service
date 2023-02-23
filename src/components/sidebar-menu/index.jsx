import { useState } from 'react';
import PropTypes from 'prop-types';
import Burger from '../burger';
import Menu from '../menu';
import { StyledOverlay, StyledMenuSection } from './styles';
import { ReactComponent as Bell } from '../../assets/images/icons/bell.svg';
import Profile from '../../assets/images/profile.svg';
import Button from '../button';

function SidebarMenu({ onClickAddMovie }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <StyledOverlay isOpen={open} />
      <StyledMenuSection>
        <Burger isOpen={open} setOpen={setOpen} />
        <Menu
          isOpen={open}
          setOpen={setOpen}
          onClickAddMovie={onClickAddMovie}
        />
        <Button variant="transparent" icon={Bell} />
        <img src={Profile} alt="Profile avatar" width="42" height="42" />
      </StyledMenuSection>
    </div>
  );
}

SidebarMenu.propTypes = {
  onClickAddMovie: PropTypes.func,
};

SidebarMenu.defaultProps = {
  onClickAddMovie: () => {},
};

export default SidebarMenu;
