/** @format */

import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import logo from './logo.svg';

const useStyles = createUseStyles({
  layout: {
    textAlign: 'center',
    background: ({ theme }) => theme.background
  },
  header: {
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
  logo: {
    height: '40vmin',
    pointerEvents: 'none',
    animationName: '$AppLogoSpin',
    animation: 'infinite 20s linear'
  }
});

function BaseLayout(): JSX.Element {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <div className={classes.layout}>
      <header className={classes.header}>
        <img src={logo} className={classes.logo} alt='logo' />
        <p>Now we are cooking with fire!</p>
      </header>
    </div>
  );
}

export default BaseLayout;
