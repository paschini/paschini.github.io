/** @format */

import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import Hero from './Hero';
import Body from './Body';

const useStyles = createUseStyles({
  layout: {
    textAlign: 'center',
    backgroundColor: ({ theme }) => theme.background
  }
});

function Home(): JSX.Element {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <div className={classes.layout}>
      <Hero />
      <Body />
    </div>
  );
}

export default Home;
