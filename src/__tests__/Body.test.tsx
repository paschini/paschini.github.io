/** @format */

import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import Body from '../Body';
import { ThemeProvider } from 'react-jss';
import { theme } from '../base-css-theme';

const TestComponent = (
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Body />
    </ThemeProvider>
  </React.StrictMode>
);

describe('Body Tests', () => {
  test('Body of the home page renders all text', () => {
    const page = render(TestComponent);

    const text1 = page.getByText('Frontend Dev, UI/UX');
    const text2 = page.getByText('Javascript, Typescript, React, GraphQL');
    const text3 = page.getByText('iOS, Swift, Java, C#');

    expect(text1).toBeInTheDocument();
    expect(text2).toBeInTheDocument();
    expect(text3).toBeInTheDocument();
  });
});
