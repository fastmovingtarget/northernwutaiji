import { render, screen } from '@testing-library/react';
import QiGong from './QiGong';

test('renders QiGong Page successfully', () => {
  render(<QiGong />);

  const qiGongNavElement = screen.getByText(/QiGong/i);
  expect(qiGongNavElement).toBeInTheDocument();
});