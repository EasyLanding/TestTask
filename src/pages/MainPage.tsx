import { Container } from '@mui/material'
import TaskList from '../components/TaskList/TaskList'
import Form from '../components/Form/Form'
import { useState } from 'react'
import taskMock from '../mocks/task-mock'
import { FormState } from '../Inrefaces/InterfaceForMock'
import { HeaderWrapperStyled } from '../Styled/StyledMUI'
import { memo } from 'react'

const MainPage = () => {
  const [tasks, setTasks] = useState<FormState[]>(taskMock)
  return (
    <Container sx={{ pt: 5, textAlign: 'left' }}>
      <h2>Add Task</h2>
      <Form setTasks={setTasks} tasks={tasks} />
      <h2>Tasks List</h2>
      <HeaderWrapperStyled>
        <p style={{ width: '20%' }}>Type</p>
        <p style={{ width: '50%' }}>description</p>
        <p style={{ width: '20%' }}>Time to do</p>
        <div style={{ width: '10%' }}></div>
      </HeaderWrapperStyled>
      <TaskList tasks={tasks} setTasks={setTasks} />
    </Container>
  )
}

export default memo(MainPage)
