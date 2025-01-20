import { render, screen } from '@testing-library/react';
import Layout from './Layout';

test.skip('renders layout successfully', () => {
  render(<Layout />);

  const homeNavElement = screen.getByText(/Home/i);
  expect(homeNavElement).toBeInTheDocument();
});
