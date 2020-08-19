/** @format */

import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, act, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'react-jss';
import { theme } from '../base-css-theme';
import ModalAnchor from '../common/ModalAnchor';

const TestModalContent = <p>modal content</p>;

const TestComponent = (
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ModalAnchor modalContent={TestModalContent} modalOffset={{ x: 0, y: 0 }}>
        <h1>modal anchor</h1>
      </ModalAnchor>
    </ThemeProvider>
  </React.StrictMode>
);

describe('Floating Modal Tests', () => {
  test('Floating Modal correctly does not render modal initially', () => {
    const page = render(TestComponent);

    expect(page.getByText('modal anchor')).toBeInTheDocument();
    expect(page.queryByText('modal content')).not.toBeInTheDocument();
  });

  test('Floating Modal renders when anchor is moused over and disappears when mouse leaves', () => {
    const page = render(TestComponent);

    expect(page.getByText('modal anchor')).toBeInTheDocument();
    expect(page.queryByText('modal content')).not.toBeInTheDocument();

    act(() => {
      fireEvent.mouseOver(page.getByText('modal anchor'));
    });

    expect(page.getByText('modal anchor')).toBeInTheDocument();
    expect(page.getByText('modal content')).toBeInTheDocument();

    act(() => {
      fireEvent.mouseOut(page.getByText('modal anchor'));
    });

    expect(page.getByText('modal anchor')).toBeInTheDocument();
    expect(page.queryByText('modal content')).not.toBeInTheDocument();
  });
});
