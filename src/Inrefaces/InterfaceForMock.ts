import { Dispatch, SetStateAction } from 'react'
export interface FormState {
  id: number
  type: string
  description: string
  timeToDo: number
}
export interface FormProps {
  tasks: FormState[]
  setTasks: Dispatch<SetStateAction<FormState[]>>
}
export interface TaskListProps {
  tasks: FormState[]
  setTasks: Dispatch<SetStateAction<FormState[]>>
}
export interface TaskProps {
  task: FormState
}
