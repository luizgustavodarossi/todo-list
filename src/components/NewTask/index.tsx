import { useTasks } from '../../hooks/useTasks'

import { AiOutlinePlusCircle } from 'react-icons/ai'
import styles from './styles.module.scss'
import { useState } from 'react'

function NewTask() {
  const { createTask } = useTasks()
  const [text, setText] = useState<string>('')

  const handleNewTask = (): void => {
    if (!text.trim()) return

    createTask(text.trim())
    setText('')
  }

  return (
    <div className={styles.container}>
      <input
        type='text'
        name='text'
        value={text}
        onChange={({ target }) => setText(target.value)}
        placeholder='Adicione uma nova tarefa'
      />

      <button type='submit' onClick={handleNewTask}>
        Criar <AiOutlinePlusCircle />
      </button>
    </div>
  )
}
export { NewTask }
