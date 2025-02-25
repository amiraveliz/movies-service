import { ThemeProvider, createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';
import Colors from './global-styles/colors';
import Breakpoints from './global-styles/breakpoints';

const GlobalStyle = createGlobalStyle`
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
    font-family: 'Oswald', serif;
    font-weight: 200;
    font-style: normal;
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
