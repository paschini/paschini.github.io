/** @format */

import React from 'react';
import logo from './logo.svg';
import { createUseStyles, useTheme } from 'react-jss';
import ModalAnchor from './common/ModalAnchor';
import DefineMe from './info/DefineMe';
import WhyReact from './info/WhyReact';

export const useStyles = createUseStyles({
  header: {
    minHeight: '50vh',
    paddingTop: '3em',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
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
  },
  title: {
    color: ({ theme }) => theme.primary
  }
});

function Hero(): JSX.Element {
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
