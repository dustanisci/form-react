import { useCallback, useState } from 'react';
import { Form, PersonForm } from './Form';
import { Print } from './Print';
import { Main } from './Screen.style'

export function Screen() {
  const [loading, setLoading] = useState<boolean>(false)
  const [form, setForm] = useState<PersonForm>({} as PersonForm)
  const [data, setData] = useState<PersonForm>({} as PersonForm)

  const getData = useCallback(async (): Promise<void> => {
    setLoading(true)
    try {
      const response = await fetch(process.env.REACT_APP_API_PERSON!)
      const value = await response.json()
      setData(value)
    } catch (error: any) {
      const { message } = new Error(error)
      console.log(message)
    }

    setLoading(false)
  }, [])

  const sendData = useCallback(async () => {
    setLoading(true)

    try {
      const options = {
        method: 'POST',
        body: JSON.stringify({ id: 0, ...form }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const response = await fetch(process.env.REACT_APP_API_PERSON!, options)
      await response.json()
      getData()
    } catch (error: any) {
      const { message } = new Error(error)
      console.log(message)
    }

    setLoading(false)
  }, [form, getData])

  return (
    <Main>
      <Form
        setForm={setForm}
        sendData={sendData}
        loading={loading}
      />
      <Print data={data} />
    </Main >
  );
}
