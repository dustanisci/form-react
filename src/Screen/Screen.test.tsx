/* eslint-disable testing-library/no-unnecessary-act */
import { act, fireEvent, render, screen } from '@testing-library/react'
import { Screen } from './Screen'
import { valuesApiMock } from './Screen.mock';

afterEach(() => {
  jest.restoreAllMocks()
})

test('It should get and send to API', async () => {
  const fetchMock = jest.fn().mockReturnValue(Promise.resolve<Response>({
    status: 200,
    statusText: 'ok',
    json: () => Promise.resolve(valuesApiMock)
  } as Response))

  Object.defineProperty(global, 'fetch', {
    value: fetchMock
  });

  const spy = jest.spyOn(global, 'fetch')
  render(<Screen />)

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

  const food = await screen.findByTestId('print-food')

  expect(food.textContent).toContain('food: Hambúrguer')
  expect(spy).toBeCalledTimes(2)
});

test('It should show an error in the API', async () => {
  const fetchMock = jest.fn().mockReturnValue(Promise.resolve<Response>({
        status: 500,
        ok: false,
        json: () => Promise.reject(new Error('Error'))
      } as Response))

  Object.defineProperty(global, 'fetch', {
    value: fetchMock
  });

  const spy = jest.spyOn(console, 'log')
  render(<Screen />)
  
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
  
  expect(spy).toBeCalled()
});
