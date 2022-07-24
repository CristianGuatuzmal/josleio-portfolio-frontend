import styles from './NavBar.module.scss'

const NavBar: () => JSX.Element = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li><a href='/portfolio'>Portfolio</a></li>
        <li><a href='/about'>About</a></li>
        <li><a href='/contact'>Contact</a></li>
      </ul>
      <h1>Josleio</h1>
    </div>
  )
}

export { NavBar };
