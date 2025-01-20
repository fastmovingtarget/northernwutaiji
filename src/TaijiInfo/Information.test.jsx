import { render, screen } from '@testing-library/react';
import Information from './Information';

test('renders Information Page successfully', () => {
  render(<Information />);

  const titleElement = screen.getByText(/Information/i);
  expect(titleElement).toBeInTheDocument();
  const explanationsElement = screen.getByText(/Explanations/i);
  expect(explanationsElement).toBeInTheDocument();
});