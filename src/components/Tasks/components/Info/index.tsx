import styles from './styles.module.scss'

interface InfoProps {
  created: number
  completed: number
}

function Info({ created, completed }: InfoProps) {
  return (
    <div className={styles.container}>
      <div className={styles.created}>
        Tarefas criadas
        <span className={styles.counter}>{created}</span>
      </div>

      <div className={styles.done}>
        Concluídas
        <span className={styles.counter}>
          {completed > 0 ? `${completed} de ${created}` : '0'}
        </span>
      </div>
    </div>
  )
}

export { Info }
