/** @format */

import React, { ReactElement } from 'react';
import { useStyles } from '../base-css-theme';
import { useTheme } from 'react-jss';

function WhyReact(): ReactElement {
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
