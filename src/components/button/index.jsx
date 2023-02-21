import PropTypes from 'prop-types';
import {
  StyledOutlined,
  StyledPrimary,
  StyledSecondary,
  StyledTransparent,
} from './styles';

function Button({ text, variant, icon: Icon, iconEnd }) {
  let StyledButton;
  switch (variant) {
    case 'secondary':
      StyledButton = StyledSecondary;
      break;
    case 'outlined':
      StyledButton = StyledOutlined;
      break;
    case 'transparent':
      StyledButton = StyledTransparent;
      break;
    default:
      StyledButton = StyledPrimary; // set primary as default
      break;
  }
  return (
    <StyledButton>
      {Icon && !iconEnd && (
        <>
          <Icon />
          &nbsp;
        </>
      )}
      {text}
      {Icon && iconEnd && (
        <>
          &nbsp;
          <Icon />
        </>
      )}
    </StyledButton>
  );
}

Button.propTypes = {
  icon: PropTypes.elementType,
  iconEnd: PropTypes.bool,
  text: PropTypes.string,
  variant: PropTypes.string,
};

Button.defaultProps = {
  icon: null,
  iconEnd: false,
  text: '',
  variant: 'primary',
};

export default Button;
