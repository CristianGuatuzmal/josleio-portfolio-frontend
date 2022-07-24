import { NavBar } from '../NavBar'
import styles from './MainLayout.module.scss'

interface Props {
  children: JSX.Element;
}

const MainLayout: (props: Props) => JSX.Element = ({ children }) => {
  return (
    <>
    <NavBar />
    <div className={styles.container}>
      {children}
    </div>
    </>
  )
}

export { MainLayout };
