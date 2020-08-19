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

function WhatIDo() {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div>
      <h1 className={classes.title}>whatIdo();</h1>
      <p>
        <span className={classes.definitions}>frontend/UI-UX: </span>
        That&apos;s my passion. I love creating ofr the web. I always keep the
        user high in the priorities.
      </p>
      <p>
        <span className={classes.definitions}>javascript/typescript: </span>I
        can&apos;t code React anymore without typescript. In my opinion,
        <span className={classes.important}>Typescript</span> is the butter to
        Javascript&apos;s bread.
      </p>
      <p>
        <span className={classes.definitions}>all else: </span>
        Experience also means to be{' '}
        <span className={classes.highlight}>versatile</span>, and at this day
        and age you can&apos;t be{' '}
        <span className={classes.highlight}>stuck</span> to one trick. I like to
        think I&apos;m a <span className={classes.important}>speciallist</span>{' '}
        in frontend who can travel back and forth in between languages but still
        has not found anything more malleable than Javascript.
      </p>
    </div>
  );
}

export default WhatIDo;
