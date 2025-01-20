import { render, screen } from '@testing-library/react';
import Applications from './Applications';

test('renders Applicatons Page text successfully', () => {
  render(<Applications />);

  const applicationsTitleElement = screen.getByText(/Applications/i);
  expect(applicationsTitleElement).toBeInTheDocument();
  const applicationsExplanationsElement = screen.getByText(/Explanations/i);
  expect(applicationsExplanationsElement).toBeInTheDocument();
  const applicationsFormLinkElement = screen.getByText(/Link/i);
  expect(applicationsFormLinkElement).toBeInTheDocument();
});
