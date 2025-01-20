import { render, screen } from '@testing-library/react';
import QiGong from './QiGong';

test('renders QiGong Page successfully', () => {
  render(<QiGong />);

  const titleElement = screen.getByText(/QiGong/i);
  expect(titleElement).toBeInTheDocument();
  const videoElement = screen.getByText(/Video/i);
  expect(videoElement).toBeInTheDocument();
  const explanationsElement = screen.getByText(/Explanations/i);
  expect(explanationsElement).toBeInTheDocument();
});