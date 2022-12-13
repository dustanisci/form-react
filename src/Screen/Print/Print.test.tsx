import { render, screen } from '@testing-library/react'
import { valuesApiMock } from '../Screen.mock';
import { Print } from './Print';

test('It should lasagna word on the screen', () => {
  render(<Print data={valuesApiMock} />)
  const lasagna = screen.getByText(/hambúrguer/i)
  
  expect(lasagna).toBeInTheDocument()
});
