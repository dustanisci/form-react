import Container from '../BasicInput/BasicInput.style';
import InputError from './../ErrorMessageInput'

export interface ISelect {
  id: string
  title: string
  hasError: boolean
  options: IOption[]
  onChange?: (...parameters: any) => void
  onBlur?: (...parameters: any) => void
}

interface IOption {
  description: string
  value: string
}

export function Select(props: ISelect) {
  const { id, title, options, hasError, onChange, onBlur } = props
  return (
    <Container>
      <>
        <label htmlFor={id}>{title}</label>
        <select data-testid={id} id={id} onChange={onChange} onBlur={onBlur}>
          {options.map(option => {
            const { description, value } = option
            return (
              <option
                key={`${description}`}
                value={value}
                data-testid={`${id}-option`}
              >
                {description}
              </option>
            )
          })}
        </select>
        {hasError && <InputError name={title} />}
      </>
    </Container>
  )
}