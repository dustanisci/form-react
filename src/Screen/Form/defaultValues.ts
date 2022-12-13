import { StatusFields } from './Form';

export const formErrors: StatusFields = {
  name: true,
  birthDate: true,
  weight: true,
  color: true,
  genre: true,
  food: true
}

export const formShows: StatusFields = {
  name: false,
  birthDate: false,
  weight: false,
  color: false,
  genre: false,
  food: false
}