import { ThemeProvider, createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';
import BebasNeue400 from './assets/fonts/BebasNeue-400.woff';
import BebasNeue700 from './assets/fonts/BebasNeue-700.woff';

const THEME = {
  primary: '#64EEBC',
  text: '#FFFFFF',
  background: '#242424',
  danger: '#FF0000',
  disabled: '#929292',
};

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Bebas Neue';
    src: url(${BebasNeue400}) format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Bebas Neue';
    src: url(${BebasNeue700}) format('woff');
    font-weight: 700;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    font-family: 'Bebas Neue', sans-serif;
    font-weight: 400;
    letter-spacing: 4px;
    color: ${(props) => props.theme.text};
    background-color: ${(props) => props.theme.background};
    overflow-x: hidden;
  }

  #root {
    height: 100vh;
  }
`;

function Theme({ children }) {
  return (
    <ThemeProvider theme={THEME}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Theme;
