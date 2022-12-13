import { PersonForm } from './Screen/Form'
import { StatusFields } from './Screen/Form/Form'

export const valueForm: PersonForm = {
  birthDate: '',
  color: '',
  food: '',
  genre: '',
  name: '',
  weight: 0
}

export const valueErrorForm: StatusFields = {
  birthDate: true,
  color: true,
  food: true,
  genre: true,
  name: true,
  weight: true
}

export const valueFocusForm: StatusFields = {
  birthDate: false,
  color: false,
  food: false,
  genre: false,
  name: false,
  weight: false
}
