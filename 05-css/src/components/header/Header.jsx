import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.logo}>Shersha</h1>
      <button className={styles.btn}>Login</button>
    </div>
  )
}

export default Header
