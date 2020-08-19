/** @format */

import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles({
  title: {
    color: ({ theme }) => theme.greenHighlight
  },
  definitions: {
    color: ({ theme }) => theme.primary
  },
  important: {
    color: ({ theme }) => theme.secondary
  },
  highlight: {
    color: ({ theme }) => theme.highlight
  }
});

function DefineMe(): JSX.Element {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <div>
      <h1 className={classes.title}>defineMe();</h1>
      <p>
        <span className={classes.definitions}>who: </span>
        I&apos;m a <span className={classes.important}>
          programmer
        </span> with <span className={classes.highlight}>over 15years</span> of
        experience;
      </p>
      <p>
        <span className={classes.definitions}>how: </span>
        Most of that time{' '}
        <span className={classes.highlight}>
          {' '}
          dedicated to front end development
        </span>{' '}
        for the web;
      </p>
      <p>
        <span className={classes.definitions}>where: </span>
        Currently working at <span className={classes.important}>LeoVegas</span>
        , since <span className={classes.highlight}> 2019</span>;
      </p>
    </div>
  );
}

export default DefineMe;
