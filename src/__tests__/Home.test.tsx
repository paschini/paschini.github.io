/** @format */
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import Home from '../Home';
import { ThemeProvider } from 'react-jss';
import { theme } from '../base-css-theme';

describe('Home Tests', () => {
  test('Home page renders my name', () => {
    const page = render(
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <Home />
        </ThemeProvider>
      </React.StrictMode>
    );

    const text = page.getByText('Camila Paschini');
    expect(text).toBeInTheDocument();
  });
});
