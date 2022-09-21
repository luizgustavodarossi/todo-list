import styles from "./styles.module.scss";
import logo from '../../assets/logo.svg'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo}></img>
      </div>
    </header>
  );
};

export default Header;
