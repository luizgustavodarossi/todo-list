import logo from '../../assets/logo.svg'
import styles from './styles.module.scss'

function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <img src={logo}></img>
      </div>
    </header>
  )
}

export { Header }
