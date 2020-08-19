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

function WhyReact(): JSX.Element {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <div>
      <h1 className={classes.title}>whyReact();</h1>
      <p>
        <span className={classes.definitions}>reasons: </span>
        [stable, wellManaged, wellMaintained, versatile, understandable,
        popular]
      </p>
      <p>
        I believe React is <span className={classes.important}>not</span> about
        to disappear. Being popular just makes it more likely that it will last
        a <span className={classes.highlight}>long tim</span> still.
      </p>
    </div>
  );
}

export default WhyReact;
