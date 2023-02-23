import { ThemeProvider, createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';
import BebasNeue400 from './assets/fonts/BebasNeue-400.woff';
import BebasNeue700 from './assets/fonts/BebasNeue-700.woff';
import Colors from './global-styles/colors';
import Breakpoints from './global-styles/breakpoints';

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

  html {
    font-size: 100%;
  }
  @media only screen and (max-width: ${Breakpoints.screenXs}) {
    html {
      font-size: 55%;
    }
  }
  @media only screen and (max-width: ${Breakpoints.screenMd}) {
    html {
      font-size: 70%;
    }
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
    <ThemeProvider theme={Colors}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Theme;
