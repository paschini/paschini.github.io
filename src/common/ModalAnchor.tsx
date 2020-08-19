/** @format */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FloatingModal from './FloatingModal';

type ModalAnchorProps = {
  children: JSX.Element;
  modalContent: JSX.Element;
  modalOffset?: { x: number; y: number } | undefined;
};

function ModalAnchor({
  children,
  modalContent,
  modalOffset
}: ModalAnchorProps): JSX.Element {
  const handleHover = (event: React.MouseEvent<HTMLSpanElement>) => {
    setModalIsOpen(true);
    const { pageX, pageY } = event;
    setMouseX(pageX + (modalOffset?.x || 0));
    setMouseY(pageY + (modalOffset?.y || 0));
  };

  const handleOut = (event: React.MouseEvent<HTMLSpanElement>) => {
    setModalIsOpen(false);
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  return (
    <>
      <span onMouseOver={handleHover} onMouseOut={handleOut}>
        {children}
        {modalIsOpen && (
          <FloatingModal top={mouseY} left={mouseX} onMouseOut={handleOut}>
            {modalContent}
          </FloatingModal>
        )}
      </span>
    </>
  );
}

export default ModalAnchor;

ModalAnchor.propTypes = {
  children: PropTypes.element.isRequired,
  modalContent: PropTypes.element.isRequired,
  modalOffset: PropTypes.shape({ x: PropTypes.number, y: PropTypes.number })
};
