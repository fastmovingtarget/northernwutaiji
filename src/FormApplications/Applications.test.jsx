import { render, screen } from '@testing-library/react';
import Applications from './Applications';

test('renders Home Page successfully', () => {
  render(<Applications />);

  const applicationsNavElement = screen.getByText(/Applications/i);
  expect(applicationsNavElement).toBeInTheDocument();
});
