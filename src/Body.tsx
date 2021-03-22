/** @format */

import React, { ReactElement } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import ModalAnchor from './common/ModalAnchor';
import WhatIDo from './info/WhatIDo';
import { Theme } from './base-css-theme';

const useStyles = createUseStyles((theme: Theme) => ({
  article: {
    minHeight: '50vh',
    color: theme.color,
    padding: '4em 5em',
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer'
  }
}));

function Body(): ReactElement {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const modalPositionCorrection = {
    x: 50,
    y: -250
  };

  return (
    <article className={classes.article}>
      <ModalAnchor
        modalContent={<WhatIDo />}
        modalOffset={modalPositionCorrection}
      >
        <>
          <code>Frontend Dev, UI/UX</code>
          <br />
          <code>Javascript, Typescript, React, GraphQL</code>
          <br />
          <code>iOS, Swift, Java, C#</code>
        </>
      </ModalAnchor>
    </article>
  );
}

export default Body;
