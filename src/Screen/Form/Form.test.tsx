/* eslint-disable testing-library/no-unnecessary-act */
import { fireEvent, render, screen, act } from '@testing-library/react'
import { Form } from './Form';

let loading = false
const sendData = jest.fn()
const setForm = jest.fn()

test('It should send the form', async () => {
  render(<Form loading={loading} sendData={sendData} setForm={setForm} />)
  
  const name = screen.getByLabelText(/nome/i)
  await act(async () => {
    fireEvent.change(name, { target: { value: 'eduardo' } })
    fireEvent.focusOut(name)
  })

  const birthday = screen.getByLabelText(/data de nascimento/i)
  await act(async () => {
    fireEvent.change(birthday, { target: { value: '1993-11-25' } })
    fireEvent.focusOut(birthday)
  })

  const weight = screen.getByLabelText(/peso/i)
  await act(async () => {
    fireEvent.change(weight, { target: { value: '60' } })
  })

  const favoriteColor = screen.getByLabelText(/cor favorita/i)
  await act(async () => {
    fireEvent.change(favoriteColor, { target: { value: '#FFFFFF' } })
    fireEvent.focusOut(favoriteColor)
  })

  const maleRadio = screen.getByLabelText(/masculino/i)
  await act(async () => {
    fireEvent.click(maleRadio)
  })

  const favoriteFood = screen.getByLabelText(/comida favorita/i)
  await act(async () => {
    fireEvent.change(favoriteFood, { target: { value: 'Lasanha' } })
    fireEvent.focusOut(favoriteFood)
  })

  const btn = screen.getByTestId('send-btn')
  await act(async () => {
    fireEvent.click(btn)
  })

  expect(sendData).toBeCalled()
});

test("It shouldn't send the form", () => {
  render(<Form loading={loading} sendData={sendData} setForm={setForm} />)
  
  const btn = screen.getByTestId('send-btn')
  fireEvent.click(btn)
  
  expect(sendData).not.toBeCalled()
});
