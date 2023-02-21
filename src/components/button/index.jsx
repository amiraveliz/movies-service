import PropTypes from 'prop-types';
import {
  StyledOutlined,
  StyledPrimary,
  StyledSecondary,
  StyledTransparent,
} from './styles';

function Button({ text, variant, icon: Icon, iconEnd, onClick, disabled }) {
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
    <StyledButton onClick={onClick} disabled={disabled}>
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
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  icon: null,
  iconEnd: false,
  text: '',
  variant: 'primary',
  onClick: () => {},
  disabled: false,
};

export default Button;
