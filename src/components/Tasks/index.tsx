import { useTasks } from "../../hooks/useTasks";

import { Info } from "./components/Info";
import { Task } from "./components/Task";

import styles from "./styles.module.scss";

export interface TaskProps {
  id: string
  text: string
  status: 'done' | 'toDo'
}

function Tasks() {
  const { tasks } = useTasks();
  const completedTasks = tasks.filter(t => t.status == 'done').length
  const createdTasks = tasks.length

  return (
    <div className={styles.container}>
      <Info created={createdTasks} completed={completedTasks} />

      <div className={styles.tasks}>
        {tasks.map(({ id, text, status }) => (
          <Task key={id} id={id} text={text} status={status} />
        ))}
      </div>
    </div>
  )
}

export { Tasks }