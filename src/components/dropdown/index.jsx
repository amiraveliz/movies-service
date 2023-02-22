import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  StyledContainer,
  DropdownHeader,
  DropdownListContainer,
  DropdownList,
  ListItem,
  DropdownPointer,
  ListItemSelected,
  ListItemSelectedContainer,
} from './styles';
import { ReactComponent as Arrow } from '../../assets/images/icons/arrow.svg';
import { ReactComponent as Check } from '../../assets/images/icons/check.svg';
import useOutsideClick from '../../hooks/useOutsideClick';

function Dropdown({ options, onChange, defaultOption }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    defaultOption || options[0]
  );

  const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleCloseMenu = () => setIsMenuOpen(false);

  const ref = useOutsideClick(handleCloseMenu);

  const handleChangeOption = (value) => () => {
    setSelectedOption(value);
    setIsMenuOpen(false);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <StyledContainer ref={ref}>
      <DropdownHeader onClick={handleToggleMenu}>
        {selectedOption.label}&nbsp;
        <Arrow />
      </DropdownHeader>
      {isMenuOpen && (
        <>
          <DropdownPointer />
          <DropdownListContainer>
            <DropdownList>
              {options.map((option) => {
                if (option.id === selectedOption.id) {
                  return (
                    <ListItemSelectedContainer key={option.id}>
                      <ListItemSelected onClick={handleChangeOption(option)}>
                        {option.label}
                      </ListItemSelected>
                      <Check />
                    </ListItemSelectedContainer>
                  );
                }
                return (
                  <ListItem
                    onClick={handleChangeOption(option)}
                    key={option.id}
                  >
                    {option.label}
                  </ListItem>
                );
              })}
            </DropdownList>
          </DropdownListContainer>
        </>
      )}
    </StyledContainer>
  );
}

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func,
  defaultOption: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }),
};

Dropdown.defaultProps = {
  onChange: undefined,
  defaultOption: undefined,
};

export default Dropdown;
