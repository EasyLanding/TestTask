import { Button, Input } from '@mui/material'
import { useState } from 'react'
import { BaseSyntheticEvent } from 'react'
import { FormState } from '../../Inrefaces/InterfaceForMock'
import { FormProps } from '../../Inrefaces/InterfaceForMock'

const Form: React.FC<FormProps> = ({ setTasks, tasks }) => {
  const [formState, setFormState] = useState<FormState>({
    id: 4,
    type: '',
    description: '',
    timeToDo: 0
  })
  const handleInputChange = (event: BaseSyntheticEvent) => {
    const target = event.target
    const name = target.name
    setFormState((prevState) => {
      return { ...prevState, [name]: target.value }
    })
  }

  const handleSubmit = (event: BaseSyntheticEvent) => {
    event.preventDefault()
    if (
      formState.type === '' ||
      formState.description === '' ||
      formState.timeToDo === 0
    ) {
      return
    }
    setFormState({
      id: ++formState.id,
      type: '',
      description: '',
      timeToDo: 0
    })
    setTasks((prevState) => {
      let newState = [...prevState, formState]
      return newState
    })
  }
  return (
    <div style={{ borderBottom: '1px solid black', marginBottom: '30px' }}>
      <form
        action="#"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '30px'
        }}
      >
        <label htmlFor="type">
          Task Type
          <Input
            value={formState.type}
            onChange={handleInputChange}
            type="text"
            name="type"
            id="type"
            style={{
              display: 'block',
              border: '1px solid black',
              padding: 10,
              borderRadius: 5,
              marginTop: 10
            }}
          />
        </label>
        <label htmlFor="description">
          Description
          <Input
            value={formState.description}
            onChange={handleInputChange}
            type="text"
            name="description"
            style={{
              display: 'block',
              border: '1px solid black',
              padding: 10,
              borderRadius: 5,
              marginTop: 10
            }}
          />
        </label>
        <label htmlFor="timeToDo">
          Time to do
          <Input
            value={formState.timeToDo}
            onChange={handleInputChange}
            type="number"
            name="timeToDo"
            style={{
              display: 'block',
              border: '1px solid black',
              padding: 10,
              borderRadius: 5,
              marginTop: 10
            }}
          />
        </label>

        <Button variant="outlined" type="submit" onClick={handleSubmit}>
          Add
        </Button>
      </form>
    </div>
  )
}

export default Form
