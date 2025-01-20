import { render, screen } from '@testing-library/react';
import Forms from './Forms';

test('renders Forms Page successfully', () => {
  render(<Forms />);

  const formsNavElement = screen.getByText(/Forms/i);
  expect(formsNavElement).toBeInTheDocument();
});
