import { TaskListProps } from '../../Inrefaces/InterfaceForMock'
import { ItemWrapperStyled } from '../../Styled/StyledMUI'
import { IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { memo } from 'react'

const TaskList = ({ tasks, setTasks }: TaskListProps) => {
  const deletedItem = (uuid: number) => {
    setTasks((tasks) => {
      const index = tasks.filter((el) => el.id !== uuid)
      console.log(index)
      return [...index]
    })
  }
  const tasksSort = tasks.sort((a, b) => b.timeToDo - a.timeToDo)
  return (
    <>
      {tasksSort.map((task) => {
        return (
          <ItemWrapperStyled key={task.id}>
            <p style={{ width: '20%', fontSize: 20 }}>{task.type}</p>
            <p style={{ width: '50%' }}>{task.description}</p>
            <p style={{ width: '20%' }}>{task.timeToDo}</p>
            <div style={{ width: '10%' }} onClick={() => deletedItem(task.id)}>
              <IconButton
                aria-label="close"
                sx={{
                  color: (theme) => theme.palette.grey[500]
                }}
              >
                <CloseIcon />
              </IconButton>
            </div>
          </ItemWrapperStyled>
        )
      })}
    </>
  )
}

export default memo(TaskList)
