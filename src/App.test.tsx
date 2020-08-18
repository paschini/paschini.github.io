/** @format */

import React from 'react';
import { render } from '@testing-library/react';
import BaseLayout from './BaseLayout';

test('renders learn react link', () => {
  const { getByText } = render(<BaseLayout />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
