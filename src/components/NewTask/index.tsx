import { useTasks } from '../../hooks/useTasks'

import { AiOutlinePlusCircle } from 'react-icons/ai'
import styles from './styles.module.scss'

function NewTask() {
  const { createTask } = useTasks()

  function handleNewTask(event: React.SyntheticEvent): void {
    event.preventDefault()

    const target = event.target as typeof event.target & {
      text: { value: string }
    }

    if (!target.text.value.trim()) return

    createTask(target.text.value.trim())
    target.text.value = ''
  }

  return (
    <div className={styles.container}>
      <form onSubmit={(event) => handleNewTask(event)}>
        <input
          type='text'
          name='text'
          placeholder='Adicione uma nova tarefa'
          autoComplete='off'
        />

        <button type='submit'>
          Criar <AiOutlinePlusCircle />
        </button>
      </form>
    </div>
  )
}
export { NewTask }
