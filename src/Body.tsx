/** @format */

import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import ModalAnchor from './common/ModalAnchor';
import WhatIDo from './info/WhatIDo';

const useStyles = createUseStyles({
  article: {
    minHeight: '50vh',
    color: ({ theme }) => theme.color,
    padding: '4em 5em',
    display: 'flex',
    flexDirection: 'column'
  }
});

function Body(): JSX.Element {
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
