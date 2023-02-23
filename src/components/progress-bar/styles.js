import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 60px 0;

  progress[value] {
    width: ${(props) => `${props.width}px`};

    -webkit-appearance: none;
    appearance: none;
  }

  progress[value]::-webkit-progress-bar {
    height: 10px;
    background-color: transparent;
  }

  progress[value]::-webkit-progress-value {
    height: 10px;
    width: 100%;
    background-color: ${(props) =>
      props.type === 'success' ? props.theme.primary : props.theme.danger};
    z-index: 1;
    position: relative;
  }
`;

export const StyledLabel = styled.span`
  margin-bottom: 16px;
`;

export const StyledLabelBottom = styled.span`
  margin-top: 16px;
  display: flex;
  justify-content: end;
  color: ${(props) => props.theme.primary};
`;

export const StyledFullBar = styled.span`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  height: 4px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledProgressContainer = styled.div`
  position: relative;
  height: 10px;
`;
