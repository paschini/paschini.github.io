/** @format */

import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import logo from './logo.svg';

const useStyles = createUseStyles({
  layout: {
    textAlign: 'center',
    backgroundColor: ({ theme }) => theme.background
  },
  header: {
    minHeight: '50vh',
    paddingTop: '3em',
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
  },
  title: {
    color: ({ theme }) => theme.primary
  },
  article: {
    minHeight: '50vh',
    color: ({ theme }) => theme.color,
    padding: '8em 5em',
    fontSize: 'calc(5px + 2vmin)',
    display: 'flex',
    flexDirection: 'column'
  }
});

function Home(): JSX.Element {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <div className={classes.layout}>
      <header className={classes.header}>
        <img src={logo} className={classes.logo} alt='logo' />
        <h1 className={classes.title}>Camila Paschini</h1>
      </header>
      <article className={classes.article}>
        <code>Frontend Dev, UI/UX</code>
        <code>Javascript, Typescript, React, GraphQL</code>
        <code>iOS, Swift, Java, C#</code>
      </article>
    </div>
  );
}

export default Home;
