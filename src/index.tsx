/** @format */

import React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { createTheming } from 'react-jss';
import Home from './Home';
import { theme, globalStyles } from './base-css-theme';

const ThemeContext = React.createContext({});
const theming = createTheming(ThemeContext);
const { ThemeProvider } = theming;

const App = () => {
  globalStyles();

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
