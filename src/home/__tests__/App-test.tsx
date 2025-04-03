/** @format */

import { describe, expect, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import App from '../App.tsx';

describe('Home Tests', () => {
  test('Home page loads', () => {
    render(<App />);
    expect(screen.getByText('Camila Paschini'));
  });
});
