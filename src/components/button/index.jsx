import PropTypes from 'prop-types';
import {
  StyledOutlined,
  StyledPrimary,
  StyledSecondary,
  StyledTransparent,
} from './styles';

function Button({ text, variant, icon: Icon }) {
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
      {Icon && (
        <>
          <Icon />
          &nbsp;
        </>
      )}
      {text}
    </StyledButton>
  );
}

Button.propTypes = {
  icon: PropTypes.elementType,
  text: PropTypes.string,
  variant: PropTypes.string,
};

Button.defaultProps = {
  icon: null,
  text: '',
  variant: 'primary',
};

export default Button;
