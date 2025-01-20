import { render, screen } from '@testing-library/react';
import Information from './Information';

test('renders Information Page successfully', () => {
  render(<Information />);

  const informationNavElement = screen.getByText(/Information/i);
  expect(informationNavElement).toBeInTheDocument();
});