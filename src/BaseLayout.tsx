/** @format */

import React from 'react';
import { createUseStyles, ThemeProvider, useTheme } from 'react-jss';
import logo from './logo.svg';

const useStyles = createUseStyles({
  App: {
    textAlign: 'center',
    background: ({ theme }) => theme.background
  },
  AppHeader: {
    backgroundColor: ({ theme }) => theme.headerBackground,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: ({ theme }) => theme.color
  },
  '@keyframes AppLogoSpin': {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' }
  },
  AppLogo: {
    height: '40vmin',
    pointerEvents: 'none',
    animationName: '$AppLogoSpin',
    animation: 'infinite 20s linear'
  },
  AppLink: {
    color: '#61dafb'
  }
});

function BaseLayout(): JSX.Element {
  const theme = {
    background: '#282c34',
    headerBackground: '#282c34',
    color: 'white'
  };

  const classes = useStyles({ theme });

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.App}>
        <header className={classes.AppHeader}>
          <img src={logo} className={classes.AppLogo} alt='logo' />
          <p>
            Now we are cooking with fire!
          </p>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default BaseLayout;
