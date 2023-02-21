import PropTypes from 'prop-types';
import StyledInput from './styles';

function Input({ placeholder, value, disabled, onChange }) {
  return (
    <StyledInput
      type="text"
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      onChange={onChange}
    />
  );
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  value: '',
  disabled: false,
  onChange: () => {},
};

export default Input;
