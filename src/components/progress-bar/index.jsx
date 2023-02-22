import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledContainer,
  StyledFullBar,
  StyledLabel,
  StyledProgressContainer,
  StyledLabelBottom,
} from './styles';
import Button from '../button';

function ProgressBar({ value, max, width, type, onRetry }) {
  const hasError = type !== 'success';
  return (
    <StyledContainer width={width} type={type}>
      {!hasError && <StyledLabel>Cargando {(value / max) * 100}%</StyledLabel>}
      {hasError && (
        <StyledLabel>¡ERROR! NO SE PUDO CARGAR LA PELÍCULA</StyledLabel>
      )}
      <StyledProgressContainer>
        <StyledFullBar />
        <progress value={value} max={max} />
      </StyledProgressContainer>
      {value === max && !hasError && (
        <StyledLabelBottom>¡LISTO!</StyledLabelBottom>
      )}
      {hasError && (
        <StyledLabelBottom>
          <Button text="REINTENTAR" variant="transparent" onClick={onRetry} />
        </StyledLabelBottom>
      )}
    </StyledContainer>
  );
}

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
  width: PropTypes.string,
  type: PropTypes.oneOf('success', 'failure'),
  onRetry: PropTypes.func,
};

ProgressBar.defaultProps = {
  max: 100,
  width: '250px',
  type: 'sucess',
  onRetry: () => {},
};

export default ProgressBar;
