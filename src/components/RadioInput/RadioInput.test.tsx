import { screen, render, fireEvent } from '@testing-library/react';
import { IRadioInput, RadioInput } from './RadioInput';

const itsTest = () => { }
const genre: IRadioInput = {
  title: 'gênero',
  name: 'genre',
  hasError: false,
  radios: [
    { id: 'male', description: 'masculino', onChange: itsTest, onBlur: itsTest },
    { id: 'female', description: 'feminino', onChange: itsTest, onBlur: itsTest },
    { id: 'other', description: 'outros', onChange: itsTest, onBlur: itsTest },
  ]
}

test('It should select a radio input', () => {
  render(<RadioInput {...genre} />)
  
  const maleRadio = screen.getByLabelText(/masculino/i)
  const femaleRadio = screen.getByLabelText(/feminino/i)
  fireEvent.click(maleRadio)

  expect(maleRadio).toBeChecked()
  expect(femaleRadio).not.toBeChecked()
});

test('It should select an error radio input', () => {
  render(<RadioInput {...genre} hasError={true} />)
  const error = screen.getByText(/o campo gênero está incorreto/i)

  expect(error).toBeInTheDocument()
});
