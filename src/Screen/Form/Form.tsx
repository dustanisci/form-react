import { useState, ChangeEvent, FormEvent, SetStateAction, useCallback } from 'react'
import { BasicInput } from '../../components/BasicInput'
import { Button } from '../../components/Button'
import { IRadioInput, RadioInput } from '../../components/RadioInput'
import { RangeInput } from '../../components/RangeInput'
import { ISelect, Select } from '../../components/Select'
import { formErrors, formShows } from './defaultValues'
import { StyleForm } from './Form.style'

export interface PersonForm {
  name: string
  birthDate: string
  weight: number
  color: string
  genre: string
  food: string
}

export interface StatusFields {
  name: boolean
  birthDate: boolean
  weight: boolean
  color: boolean
  genre: boolean
  food: boolean
}

export interface IProps {
  loading: boolean
  setForm: (value: SetStateAction<PersonForm>) => void
  sendData: () => void
}

export function Form({ setForm, sendData, loading }: IProps) {
  const [focusForm, setFocusForm] = useState<StatusFields>(formShows)
  const [errorForm, setErrorForm] = useState<StatusFields>(formErrors)

  const handlerForm = useCallback((input: ChangeEvent<any>): void => {
    const { id, value, name } = input.target
    setForm((prevState) => ({ ...prevState, [id ?? name]: value }))
  }, [setForm])

  const checkForm = useCallback((input: ChangeEvent<any>): void => {
    const { id, value, name } = input.target
    setErrorForm((prevState) => ({ ...prevState, [id ?? name]: !value.length }))
    setFocusForm((prevState) => ({ ...prevState, [id ?? name]: true }))
  }, [])

  const handlerSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    let forceAllFocus: StatusFields = {} as StatusFields
    Object.keys(focusForm).forEach((property: string) => {
      forceAllFocus = {
        ...forceAllFocus,
        [property]: true
      }
    })

    setFocusForm(forceAllFocus)

    const hasErrors = Object
      .values(errorForm)
      .find((hasErrors: boolean) => hasErrors)

    if (hasErrors) return
    sendData()
  }, [errorForm, focusForm, sendData])

  const genre: IRadioInput = {
    title: 'gênero',
    name: 'genre',
    hasError: errorForm.genre && focusForm.genre,
    radios: [
      { id: 'male', description: 'masculino', onChange: handlerForm, onBlur: checkForm },
      { id: 'female', description: 'feminino', onChange: handlerForm, onBlur: checkForm },
      { id: 'other', description: 'outros', onChange: handlerForm, onBlur: checkForm },
    ]
  }

  const select: ISelect = {
    title: 'comida favorita',
    id: 'food',
    hasError: errorForm.food && focusForm.food,
    onBlur: checkForm,
    onChange: handlerForm,
    options: [
      { description: 'Selecione', value: '' },
      { description: 'Lasanha', value: 'Lasanha' },
      { description: 'Macarrão', value: 'Macarrão' },
      { description: 'Hambúrguer', value: 'Hambúrguer' },
      { description: 'Pizza', value: 'Pizza' },
    ]
  }

  return (
    <StyleForm onSubmit={handlerSubmit}>
      <BasicInput
        id='name'
        description='nome'
        type='text'
        onBlur={checkForm}
        onChange={handlerForm}
        hasError={errorForm.name && focusForm.name}
      />

      <BasicInput
        id='birthDate'
        description='data de nascimento'
        type='date'
        onBlur={checkForm}
        onChange={handlerForm}
        hasError={errorForm.birthDate && focusForm.birthDate}
      />

      <RangeInput
        id='weight'
        description='peso'
        max='250'
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          handlerForm(e)
          checkForm(e)
        }}
        hasError={errorForm.weight && focusForm.weight}
      />

      <BasicInput
        id='color'
        description='cor favorita'
        type='color'
        onBlur={checkForm}
        onChange={handlerForm}
        hasError={errorForm.color && focusForm.color}
      />

      <RadioInput {...genre} />
      <Select {...select} />

      <Button
        id='send-btn'
        label='Enviar'
        loading={loading}
        tooltipLabel='Você tem certeza?'
      />

    </StyleForm>
  );
}