import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders initial page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello there/i);
  expect(linkElement).toBeInTheDocument();
});
