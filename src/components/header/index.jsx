import { useState } from 'react';
import Button from '../button';
import {
  StyledContainer,
  StyledLogoSection,
  StyledMenuSection,
  StyledModalBody,
} from './styles';
import { ReactComponent as Plus } from '../../assets/images/icons/plus.svg';
import { ReactComponent as Logo } from '../../assets/images/icons/logo.svg';
import { ReactComponent as Menu } from '../../assets/images/icons/menu.svg';
import { ReactComponent as Bell } from '../../assets/images/icons/bell.svg';
import Profile from '../../assets/images/profile.svg';
import Modal from '../modal';
import Input from '../input';

function Header() {
  const [showAddMovieModal, setShowAddMovieModal] = useState(false);

  const toggleShowAddMovieModal = () =>
    setShowAddMovieModal(!showAddMovieModal);

  const handleAddMovie = (movie) => {
    console.log(movie, '#### movie');
  };

  return (
    <StyledContainer>
      <StyledLogoSection>
        <Logo />
        <Button
          text="agregar película"
          variant="transparent"
          icon={Plus}
          onClick={toggleShowAddMovieModal}
        />
      </StyledLogoSection>
      <StyledMenuSection>
        <Button variant="transparent" icon={Menu} />
        <Button variant="transparent" icon={Bell} />
        <img src={Profile} alt="Profile avatar" width="42" height="42" />
      </StyledMenuSection>
      <Modal
        visible={showAddMovieModal}
        title="agregar película"
        onHiding={toggleShowAddMovieModal}
      >
        <StyledModalBody>
          <span>Here upload hile</span>
          <Input placeholder="TÍTULO" />
          <Button
            text="subir película"
            variant="secondary"
            onClick={handleAddMovie}
            disabled
          />
        </StyledModalBody>
      </Modal>
    </StyledContainer>
  );
}

export default Header;
