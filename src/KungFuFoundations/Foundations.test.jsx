import { render, screen } from '@testing-library/react';
import Foundations from './Foundations';

test('renders Foundations Page successfully', () => {
  render(<Foundations />);

  const titleElement = screen.getByText(/Foundation/i);
  expect(titleElement).toBeInTheDocument();
  const videoElement = screen.getByText(/Video/i);
  expect(videoElement).toBeInTheDocument();
  const explanationsElement = screen.getByText(/Explanations/i);
  expect(explanationsElement).toBeInTheDocument();
});
