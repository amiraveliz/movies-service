import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const StyledLoader = styled.div`
  border: ${(props) => `10px solid ${props.theme.primary}`};
  border-radius: 50%;
  border-top: ${(props) => `10px solid ${props.theme.text}`};
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: ${spinAnimation} 2s linear infinite;
  margin: 0 auto;
  top: 50%;
  display: flex;
  position: relative;
`;

export default StyledLoader;
