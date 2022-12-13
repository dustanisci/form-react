import styled from '@emotion/styled'
import { ReactElement } from 'react'

interface IError {
  name: string
}

const Error = styled.label`
  margin-top: 10px;
  font-size: 10pt;
  font-weight: bold;
  color: red;
  &::first-letter{
    text-transform: capitalize; 
  }
`

export default function ErrorMessageInput({ name }: IError): ReactElement {
  return <Error>O campo {name} está incorreto.</Error>
}