import { fireEvent, render, screen } from '@testing-library/react';
import { ChangeEvent } from 'react';
import { IRangerInput, RangeInput } from './RangeInput';

const age: IRangerInput = {
  description: 'idade',
  hasError: false,
  max: '100',
  id: 'testId',
  onChange: (e: ChangeEvent<HTMLInputElement>) => {
  }
}

test('It should set a value on ranger input', () => {
  render(<RangeInput {...age} />)

  const ageInput = screen.getByTestId('testId')
  fireEvent.change(ageInput, {target: {value: '50'}})
  const ageValue = screen.getByText(/50 kg/i)
  
  expect(ageValue).toBeInTheDocument()
});

test('It should select an error radio input', () => {
  render(<RangeInput {...age} hasError={true} />)
  const error = screen.getByText(/o campo idade está incorreto/i)

  expect(error).toBeInTheDocument()
});