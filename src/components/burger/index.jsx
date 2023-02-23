import PropTypes from 'prop-types';
import StyledBurger from './styles';

function Burger({ isOpen, setOpen }) {
  return (
    <StyledBurger open={isOpen} onClick={() => setOpen(!isOpen)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
}

Burger.propTypes = {
  isOpen: PropTypes.bool,
  setOpen: PropTypes.func,
};

Burger.defaultProps = {
  isOpen: false,
  setOpen: () => {},
};

export default Burger;
