import { ChangeEvent } from 'react';
import { IInput } from '../BasicInput';
import Container from '../BasicInput/BasicInput.style';
import InputError from './../ErrorMessageInput'

export interface IRadioInput {
  name: string
  title: string
  hasError: boolean
  radios: Omit<IInput, 'type' | 'hasError'>[]
}

export function RadioInput(props: IRadioInput) {
  const { title, radios, hasError, name } = props
  return (
    <Container>
      <>
        <label>{title}</label>
        {radios.map(radio => {
          const { description, id, onChange, onBlur } = radio
          return (
            <div key={id}>
              <input
                type='radio'
                data-testid={id}
                id={id}
                name={name}
                value={description}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  const { value, name } = e.target
                  const event = { target: { value, name } } as ChangeEvent<HTMLInputElement>
                  onBlur(event)
                  return onChange(event)
                }}
              />
              <label htmlFor={id}>{description}</label>
            </div>
          )
        })}
        {hasError && <InputError name={title} />}
      </>
    </Container>
  )
}