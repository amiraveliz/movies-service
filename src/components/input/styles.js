import styled from 'styled-components';

const StyledInput = styled.input`
  font-size: 1rem;
  font-family: inherit;
  letter-spacing: inherit;
  padding: 10px;
  margin: 10px;
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.background};
  border: none;
  border-bottom: ${(props) => `1px solid ${props.theme.text}`};
  width: 248px;
  text-align: center;
  ::placeholder {
    color: ${(props) => props.theme.text};
    text-align: center;
  }
  &:focus-visible {
    outline: none;
  }
  caret-color: ${(props) => props.theme.text};
  box-sizing: border-box;
`;

export default StyledInput;
