import { fireEvent, render, screen } from '@testing-library/react';
import { ChangeEvent } from 'react';
import { ISelect, Select } from './Select';

const selectProperties: ISelect = {
  hasError: false,
  id: 'test',
  title: 'select test',
  onBlur: (e: ChangeEvent<HTMLInputElement>) => { },
  onChange: (e: ChangeEvent<HTMLInputElement>) => { },
  options: [
    { value: 'test1', description: 'description1' },
    { value: 'test2', description: 'description2' }
  ]
}

test('It should select a value in the field', () => {
  render(<Select {...selectProperties} />)

  const select = screen.getByTestId('test')
  fireEvent.change(select, { target: { value: 'test1' } })
  const option = screen.getAllByTestId('test-option')[0]

  expect((option as HTMLOptionElement).selected).toBeTruthy()
});

test('It should show an error below the field', () => {
  render(<Select {...selectProperties} hasError={true} />)
  const error = screen.getByText(/o campo select test está incorreto/i)
  
  expect(error).toBeInTheDocument()
});
