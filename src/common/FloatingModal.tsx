/** @format */

import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles, useTheme } from 'react-jss';

type FloatingModalProps = {
  children: JSX.Element;
  top: number;
  left: number;
  onMouseOut: (event: React.MouseEvent<HTMLSpanElement>) => void;
};

const useStyles = createUseStyles({
  modal: {
    backgroundColor: ({ theme }) => theme.darkBackground,
    display: 'flex',
    minWidth: '150px',
    maxWidth: '50vw',
    minHeight: '4em',
    maxHeight: '90vh',
    position: 'absolute',
    top: ({ top }) => top,
    left: ({ left }) => left,
    borderRadius: '0.2em',
    alignContent: 'center',
    justifyContent: 'flex-start',
    padding: '1em',
    fontSize: 'calc( 2vmin)',
    textAlign: 'left'
  }
});

function FloatingModal({
  children,
  top,
  left,
  onMouseOut
}: FloatingModalProps): JSX.Element | null {
  const theme = useTheme();
  const classes = useStyles({ theme, top, left });

  return (
    <div className={classes.modal} onMouseOut={onMouseOut}>
      {children}
    </div>
  );
}

export default FloatingModal;

FloatingModal.propTypes = {
  children: PropTypes.element.isRequired,
  top: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired,
  onMouseOut: PropTypes.func.isRequired
};
