/** @format */

import React, { ReactElement } from 'react';
import logo from './logo.svg';
import { createUseStyles, useTheme } from 'react-jss';
import ModalAnchor from './common/ModalAnchor';
import DefineMe from './info/DefineMe';
import WhyReact from './info/WhyReact';
import { Theme } from './base-css-theme';

const useStyles = createUseStyles((theme: Theme) => ({
  header: {
    minHeight: '50vh',
    paddingTop: '3em',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.color,
    cursor: 'pointer'
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
  },
  title: {
    color: theme.primary,
    cursor: 'pointer'
  }
}));

function Hero(): ReactElement {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const modalPositionCorrection = {
    x: 10,
    y: 10
  };

  return (
    <header className={classes.header}>
      <ModalAnchor
        modalContent={<WhyReact />}
        modalOffset={modalPositionCorrection}
      >
        <img src={logo} className={classes.logo} alt='logo' />
      </ModalAnchor>
      <ModalAnchor
        modalContent={<DefineMe />}
        modalOffset={modalPositionCorrection}
      >
        <h1 className={classes.title}>Camila Paschini</h1>
      </ModalAnchor>
    </header>
  );
}

export default Hero;
