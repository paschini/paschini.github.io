/** @format */
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import BaseLayout from '../BaseLayout';
import { ThemeProvider } from 'react-jss';
import { theme } from '../base-css-theme';

describe('BaseLayout Tests', () => {
  test('base layout renders initial message', () => {
    const page = render(
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <BaseLayout />
        </ThemeProvider>
      </React.StrictMode>
    );

    const text = page.getByText('Now we are cooking with fire!');
    expect(text).toBeInTheDocument();
  });
});
