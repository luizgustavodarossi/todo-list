import { FaCheckCircle, FaRegCircle, FaRegTrashAlt } from "react-icons/fa"
import { TaskProps } from "../.."
import { useTasks } from "../../../../hooks/useTasks"

import styles from './styles.module.scss'

function Task({ id, text, status }: TaskProps) {
  const { toggleStatusTask, deleteTask } = useTasks()

  function checkIcon() {
    if (status == 'toDo') {
      return (
        <FaRegCircle
          className={styles.toDoIcon}
          size={20}
          onClick={() => toggleStatusTask(id, 'done')}
        />
      )
    }

    return (
      <FaCheckCircle
        size={20}
        onClick={() => toggleStatusTask(id, 'toDo')}
        className={styles.doneIcon}
      />
    )
  }

  return (
    <div className={styles.container}>
      <span>{checkIcon()}</span>

      <div
        className={`${styles.text} ${(status == 'done' ? styles.doneText : '')}`}
      >
        {text}
      </div>

      <span>
        <FaRegTrashAlt
          size={16}
          onClick={() => deleteTask(id)}
          className={styles.trash}
        />
      </span>
    </div>
  )
}

export { Task }