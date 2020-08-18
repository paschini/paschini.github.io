/** @format */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BaseLayout from './BaseLayout';
import * as serviceWorker from './serviceWorker';
import jss from 'jss';
import preset from 'jss-preset-default';
import { ThemeProvider, SheetsRegistry, JssProvider } from 'react-jss';
import { theme, globalStyleSheet } from './base-css-theme';

const setupJss = () => {
  jss.setup(preset());

  const sheetsRegistry = new SheetsRegistry();

  sheetsRegistry.add(globalStyleSheet);
  return sheetsRegistry;
};

const sheets = setupJss();

ReactDOM.render(
  <React.StrictMode>
    <JssProvider registry={sheets}>
      <ThemeProvider theme={theme}>
        <BaseLayout />
      </ThemeProvider>
    </JssProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
