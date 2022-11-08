import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Bibliothèque des composants', () => {
  render(<App />);
  const textElement = screen.getByText(/Bibliothèque des Composants/i);
  expect(textElement).toBeInTheDocument();
});
