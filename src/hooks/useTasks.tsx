import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { api } from '../services/api'

import { v4 as uuidv4 } from 'uuid'

interface Task {
  id: string
  text: string
  status: 'done' | 'toDo'
}

interface TasksProviderProps {
  children: ReactNode
}

interface TasksContextData {
  tasks: Task[]
  createTask: (text: Task['text']) => void
  deleteTask: (id: Task['id']) => void
  toggleStatusTask: (id: Task['id'], status: Task['status']) => void
}

const TasksContext = createContext<TasksContextData>({} as TasksContextData)

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    getTasks()
  }, [])

  function getTasks() {
    api.get('tasks').then((response) => setTasks(response.data))
  }

  function createTask(text: Task['text']): void {
    api
      .post('tasks', { text, id: uuidv4(), status: 'toDo' })
      .then(() => getTasks())
  }

  function toggleStatusTask(id: Task['id'], status: Task['status']): void {
    const task = tasks.find((task) => task.id === id)
    api.put(`tasks/${id}`, { ...task, status: status }).then(() => getTasks())
  }

  function deleteTask(id: Task['id']): void {
    api.delete(`tasks/${id}`).then(() => getTasks())
  }

  return (
    <TasksContext.Provider
      value={{ tasks, createTask, toggleStatusTask, deleteTask }}
    >
      {children}
    </TasksContext.Provider>
  )
}

export function useTasks() {
  const context = useContext(TasksContext)

  return context
}
