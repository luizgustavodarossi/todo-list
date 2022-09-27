import { createContext, ReactNode, useContext, useState } from "react";

import { v4 as uuidv4 } from 'uuid';

interface Task {
  id: string
  text: string
  status: 'done' | 'toDo'
}

interface TasksProviderProps {
  children: ReactNode;
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

  function createTask(text: Task['text']): void {
    setTasks([{ text, id: uuidv4(), status: 'toDo' }, ...tasks])
  }

  function toggleStatusTask(id: Task['id'], status: Task['status']): void {
    const newTasks = tasks.map((task) => {
      if (task.id != id) return task

      task.status = status

      return task
    })

    setTasks(newTasks)
  }

  function deleteTask(id: Task['id']): void {
    setTasks(tasks.filter((task) => task.id != id))
  }

  return (
    <TasksContext.Provider value={{ tasks, createTask, toggleStatusTask, deleteTask }}>
      {children}
    </TasksContext.Provider>
  )
}

export function useTasks() {
  const context = useContext(TasksContext);

  return context;
}