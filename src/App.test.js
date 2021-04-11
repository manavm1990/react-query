import { screen } from '@testing-library/react';
import React from 'react';
import App from './App';
import { render } from './test-utils';

test('renders dark mode toggle button', () => {
  render(<App />);
  const switchElement = screen.getByRole('button', {
    name: /^Switch to/,
  });
  expect(switchElement).toBeInTheDocument();
});
