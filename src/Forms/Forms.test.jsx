import { render, screen } from '@testing-library/react';
import Forms from './Forms';

test('renders Forms Page successfully', () => {
  render(<Forms />);

  const titleElement = screen.getByText(/Forms/i);
  expect(titleElement).toBeInTheDocument();
  const videoElement = screen.getByText(/Video/i);
  expect(videoElement).toBeInTheDocument();
  const explanationsElement = screen.getByText(/Explanations/i);
  expect(explanationsElement).toBeInTheDocument();
  const formLinkElement = screen.getByText(/Link/i);
  expect(formLinkElement).toBeInTheDocument();
});
