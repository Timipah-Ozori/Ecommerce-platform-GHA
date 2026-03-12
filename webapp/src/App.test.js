import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Simple E-commerce title', () => {
  render(<App />);
  const titleElement = screen.getByText(/simple e-commerce/i);
  expect(titleElement).toBeInTheDocument();
});
