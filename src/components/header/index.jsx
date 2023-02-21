import Button from '../button';
import {
  StyledContainer,
  StyledLogoSection,
  StyledMenuSection,
} from './styles';
import { ReactComponent as Plus } from '../../assets/images/icons/plus.svg';
import { ReactComponent as Logo } from '../../assets/images/icons/logo.svg';
import { ReactComponent as Menu } from '../../assets/images/icons/menu.svg';
import { ReactComponent as Bell } from '../../assets/images/icons/bell.svg';
import Profile from '../../assets/images/profile.svg';

function Header() {
  return (
    <StyledContainer>
      <StyledLogoSection>
        <Logo />
        <Button text="agregar película" variant="transparent" icon={Plus} />
      </StyledLogoSection>
      <StyledMenuSection>
        <Button variant="transparent" icon={Menu} />
        <Button variant="transparent" icon={Bell} />
        <img src={Profile} alt="Profile avatar" width="42" height="42" />
      </StyledMenuSection>
    </StyledContainer>
  );
}

export default Header;
