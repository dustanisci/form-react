import { fireEvent, render, screen } from '@testing-library/react'
import { BasicInput } from './BasicInput';

test('It should show a test input', () => {
  render(
    <BasicInput
      description='test'
      hasError={false}
      type='text'
      id='test'
      onChange={() => { }}
      onBlur={() => { }}
    />
  )

  const input = screen.getByTestId('test')
  const label = screen.getByText('test')

  expect(input).toBeInTheDocument()
  expect(label).toBeInTheDocument()
});

test('It should show an error input', () => {
  render(
    <BasicInput
      description='test'
      hasError={true}
      type='text'
      id='test'
      onChange={() => { }}
      onBlur={() => { }}
    />
  )

  const btn = screen.getByText('O campo test está incorreto.')
  expect(btn).toBeInTheDocument()
});

test('It should trigger onChange and onBlur events', () => {
  let onChange = false
  let onBlur = false

  render(
    <BasicInput
      description='test'
      hasError={false}
      type='text'
      id='test'
      onChange={() => { onChange = true }}
      onBlur={() => { onBlur = true }}
    />
  )

  const input = screen.getByTestId('test')
  fireEvent.change(input, {target: {value: '123'}})
  fireEvent.focusOut(input)

  expect(onChange).toBeTruthy()
  expect(onBlur).toBeTruthy()
});