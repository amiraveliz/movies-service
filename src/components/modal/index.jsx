import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import { ReactComponent as Close } from '../../assets/images/icons/close.svg';
import {
  StyledContainer,
  StyledHeader,
  StyledModal,
  StyledOverlay,
  StyledCloseButton,
} from './styles';

function Modal({ title, visible = false, onShown, onHiding, children }) {
  useEffect(() => {
    if (visible) if (onShown) onShown();
  }, [visible, onShown]);

  const handleOnHiding = () => {
    if (onHiding) onHiding();
  };

  if (!visible) return null;

  return (
    <StyledModal>
      <StyledOverlay />
      <StyledContainer>
        <StyledCloseButton>
          <Button variant="transparent" icon={Close} onClick={handleOnHiding} />
        </StyledCloseButton>
        <StyledHeader>
          <h2>{title}</h2>
        </StyledHeader>
        {children}
      </StyledContainer>
    </StyledModal>
  );
}

Modal.propTypes = {
  title: PropTypes.string,
  visible: PropTypes.bool,
  onShown: PropTypes.func,
  onHiding: PropTypes.func,
  children: PropTypes.node,
};

Modal.defaultProps = {
  title: '',
  visible: false,
  onShown: null,
  onHiding: null,
  children: PropTypes.node,
};

export default Modal;
