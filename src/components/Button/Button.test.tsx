import { fireEvent, render, screen } from '@testing-library/react'
import { Button } from './Button';

test('It should show a tooltip under the button', async () => {
  render(
    <Button
      label='test'
      tooltipLabel='tooltip message'
      loading={false}
      id='test'
    />
  )

  const btn = screen.getByTestId('test')
  fireEvent.mouseEnter(btn)
  let tooltip = screen.getByText('tooltip message')
  expect(tooltip).toBeInTheDocument()

  fireEvent.mouseLeave(btn)
  tooltip = screen.queryByText('tooltip message')!
  expect(tooltip).not.toBeInTheDocument()
});

test('It should show loading button', () => {
  render(
    <Button
      label='test'
      tooltipLabel='tooltip message'
      loading={true}
      id='test'
    />
  )

  const loading = screen.getByAltText(/carregando/i)

  expect(loading).toBeInTheDocument()
});

test('It should show a send label button', () => {
  render(
    <Button
      label='send'
      tooltipLabel='tooltip message'
      loading={false}
      id='test'
    />
  )

  const btn = screen.getByText('send')
  
  expect(btn).toBeInTheDocument()
});
