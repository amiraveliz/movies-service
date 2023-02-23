import PropTypes from 'prop-types';
import { StyledMenu, StyledOptions, StyledLogoContainer } from './styles';
import { ReactComponent as Plus } from '../../assets/images/icons/plus.svg';
import { ReactComponent as Bell } from '../../assets/images/icons/bell.svg';
import { ReactComponent as Logo } from '../../assets/images/icons/logo.svg';
import Profile from '../../assets/images/profile.svg';
import Button from '../button';

function Menu({ isOpen, onClickAddMovie }) {
  return (
    <StyledMenu isOpen={isOpen}>
      <StyledLogoContainer>
        <Logo />
      </StyledLogoContainer>
      <StyledOptions>
        <Button variant="transparent" icon={Bell} />
        <img src={Profile} alt="Profile avatar" width="42" height="42" />
      </StyledOptions>
      <div>
        <span>Inicio</span>
        <span>Series</span>
        <span>Películas</span>
        <span>Agregadas recientemente</span>
        <span>Populares</span>
        <span>Mis películas</span>
        <span>Mi lista</span>
      </div>
      <div>
        <Button
          variant="transparent"
          text="Agregar película"
          icon={Plus}
          onClick={onClickAddMovie}
          fontSize={1.37}
        />
      </div>
      <div>
        <span>Cerrar sesión</span>
      </div>
    </StyledMenu>
  );
}

Menu.propTypes = {
  isOpen: PropTypes.bool,
  onClickAddMovie: PropTypes.func,
};

Menu.defaultProps = {
  isOpen: false,
  onClickAddMovie: () => {},
};

export default Menu;
