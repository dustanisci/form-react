import { ChangeEvent, useState } from 'react'
import { IInput } from '../BasicInput'
import Container from '../BasicInput/BasicInput.style'
import InputError from '../ErrorMessageInput'
import LabelKg from './RangeInput.style'

export interface IRangerInput extends Omit<IInput, 'type' | 'onBlur'> {
  max: string
}

export function RangeInput({
  id,
  description,
  max,
  onChange,
  hasError
}: IRangerInput) {
  const [showValue, setShowValue] = useState<number>(0)
  return (
    <Container>
      <label htmlFor={id}>{description}</label>
      <input
        type='range'
        id={id}
        value={showValue}
        data-testid={id}
        max={max}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          const { value } = e.target
          const numberInputValue = Number(value)
          setShowValue(numberInputValue)
          return onChange(e)
        }}
      />
      <LabelKg>{showValue} Kg</LabelKg>
      {hasError && <InputError name={description} />}
    </Container>
  )
}