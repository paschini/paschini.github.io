/** @format */

import React, { ReactElement } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import Hero from './Hero';
import Body from './Body';
import { Theme } from './base-css-theme';

const useStyles = createUseStyles((theme: Theme) => ({
  layout: {
    textAlign: 'center',
    backgroundColor: theme.background
  }
}));

function Home(): ReactElement {
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
