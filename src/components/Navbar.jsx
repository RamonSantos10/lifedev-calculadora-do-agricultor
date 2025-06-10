import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import { useAuthentication } from '../hooks/useAuthentication';
import { useAuthValue } from '../context/AuthContext';

const Navbar = () => {
  const { logout } = useAuthentication()
  const user = useAuthValue();
  console.log(user)
  return (
    <>
      <nav className={styles.navbar}>
        <ul className= {styles.links_list}>
          <NavLink to="/" className={({ isActive }) => isActive ? `${styles.brand} ${styles.active}` : styles.brand}>
            <li><span>Life</span>Dev</li>
          </NavLink>
          {!user && (
            <>
              <li>
                <NavLink
                  to='/login'
                  className={({ isActive }) => (isActive ? styles.active : "")}>
                  Entrar
                </NavLink>
              </li>

              <li>
                <NavLink
                  to='/register'
                  className={({ isActive }) => (isActive ? styles.active : "")}>
                  Cadastrar
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
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/post/create'
                  className={({ isActive }) => (isActive ? styles.active : "")}>
                  Novo post
                </NavLink>
              </li>
            </>
          )}
          <li>
            <NavLink
              to='/about'
              className={({ isActive }) => (isActive ? styles.active : "")}>
              Sobre
            </NavLink>
          </li>

          <button onClick={logout} className={styles.logout}>Exit</button>
        </ul>
      </nav>
    </>
  )
}

export default Navbar