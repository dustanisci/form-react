import { PersonForm } from '../Form';
import { Label } from './Print.style'

interface IProps {
  data: PersonForm
}

export function Print({ data }: IProps) {
  return (
    <div data-testid='print'>
      {data && Object.entries(data).map((value: [string, any]) => {
        const property = value[0]
        const valueProperty = value[1]
        return (
          <Label data-testid={`print-${property}`} key={`${property}-${value}`}>
            <strong>{property}:</strong> {valueProperty}
          </Label>
        )
      })}
    </div>
  );
}
