import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import { useAuthentication } from '../hooks/useAuthentication'
import { useAuthValue } from '../components/context/AuthContex'

const Navbar = () => {
  const { user } = useAuthValue()

  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.link_list}>
          <Navlink to="/" className={styles.brand} activeClassName={styles.active}>
            <li><span>Life</span>Dev</li>
          </Navlink>
          {!user && (
            <>
              <li>
                <NavLink
                  to='/login'
                  className={({ isActive }) => (isActive ? styles.active : "")}>
                  entrar
                </NavLink>
              </li>

              <li>
                <NavLink
                  to='/register'
                  className={({ isActive }) => (isActive ? styles.active : "")}>
                  cadastrar
                </NavLink>
              </li>
            </>
          )}
          {user && (
            <>
              <li>
                <NavLink
                  to='/dashboard'
                  className={({ isActive }) => (isActive ? styles.active : "")}>
                  dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/post/create'
                  className={({ isActive }) => (isActive ? styles.active : "")}>
                  novo post
                </NavLink>
              </li>
            </>
          )}
          <li>
            <NavLink
              to='/about'
              className={({ isActive }) => (isActive ? styles.active : "")}>
              sobre
            </NavLink>
          </li>

          <button className={styles.exit}>Exit</button>
        </ul>
      </nav>
    </>
  )
}

export default Navbar