import { render, screen } from '@testing-library/react';
import Foundations from './Foundations';

test('renders Foundations Page successfully', () => {
  render(<Foundations />);

  const foundationsNavElement = screen.getByText(/Foundations/i);
  expect(foundationsNavElement).toBeInTheDocument();
});
