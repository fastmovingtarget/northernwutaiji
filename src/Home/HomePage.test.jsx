import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

test('renders Home Page successfully', () => {
  render(<HomePage />);

  const homeNavElement = screen.getByText(/Home/i);
  expect(homeNavElement).toBeInTheDocument();
});
