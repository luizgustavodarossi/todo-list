import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { Tasks } from './components/Tasks'

import { TasksProvider } from './hooks/useTasks'

import styles from './App.module.scss'
import './global.scss'

function App() {
  return (
    <TasksProvider>
      <Header />

      <div className={styles.container}>
        <NewTask />

        <Tasks />
      </div>
    </TasksProvider>
  )
}

export { App }
