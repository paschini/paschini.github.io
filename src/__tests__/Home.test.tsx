/** @format */

import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import Home from '../Home';
import { ThemeProvider } from 'react-jss';
import { theme } from '../base-css-theme';

const TestComponent = (
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  </React.StrictMode>
);

describe('Home Tests', () => {
  test('Home page renders my name', () => {
    const page = render(TestComponent);

    const text = page.getByText('Camila Paschini');
    expect(text).toBeInTheDocument();
    expect(page.container.getElementsByTagName('img')[0]).toBeInTheDocument();
  });
});
