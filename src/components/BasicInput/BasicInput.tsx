import { ChangeEvent } from 'react'
import InputError from '../ErrorMessageInput'
import Container from './BasicInput.style'

export interface IInput {
  id: string
  description: string
  type: string
  onChange: (e: ChangeEvent<any>) => void
  onBlur: (e: ChangeEvent<any>) => void
  hasError: boolean
}

export function BasicInput({
  id,
  description,
  type,
  onChange,
  onBlur,
  hasError
}: IInput) {
  return (
    <Container>
      <label htmlFor={id}>{description}</label>
      <input
        type={type}
        id={id}
        data-testid={id}
        onChange={onChange}
        onBlur={onBlur}
      />
      {hasError && <InputError name={description} />}
    </Container>
  )
}