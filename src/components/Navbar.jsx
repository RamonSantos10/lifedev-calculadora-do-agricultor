import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [user, setUser] = useState({ name: 'Hugo', idade: 19 })

  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.link_list}>
          <Navlink to ="/" className={styles.brand} activeClassName=
          {styles.active}>
            <li><span>Life</span>Dev</li>
          </Navlink>
          <NavLink to="/login" className={styles.link} activeClassName={styles.active}>
          <li>Login</li>
          </NavLink>
          <NavLink to="/register" className={styles.link} activeClassName={styles.active}>
          <li>Register</li>
          </NavLink>
          <button className={styles.exit}>Exit</button>
        </ul>
      </nav>
    </>
  )
}

export default Navbar