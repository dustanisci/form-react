import { render, screen } from '@testing-library/react';
import ErrorMessageInput from './ErrorMessageInput';

test('It should show an error', () => {
  render(<ErrorMessageInput name='cor' />)
  const error = screen.getByText('O campo cor está incorreto.')
  
  expect(error).toBeInTheDocument()
});
