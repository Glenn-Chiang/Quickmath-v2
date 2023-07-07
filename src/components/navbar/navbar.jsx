import { NavLink } from "react-router-dom";
import styles from './navbar.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsProgress, faPlayCircle, faSignIn, faTrophy } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <NavLink to={'/'} className={({isActive}) => isActive ? styles.active : ''}>
        <FontAwesomeIcon icon={faPlayCircle}/>
        Play
      </NavLink>
      <NavLink to={'/stats'} className={({isActive}) => isActive ? styles.active : ''}>
        <FontAwesomeIcon icon={faBarsProgress}/>
        Stats
      </NavLink>
      <NavLink to={'/leaderboard'} className={({isActive}) => isActive ? styles.active : ''}>
        <FontAwesomeIcon icon={faTrophy}/>
        Leaderboard
      </NavLink>
      <NavLink to={'/signIn'} className={({isActive}) => isActive ? styles.active : ''}>
        <FontAwesomeIcon icon={faSignIn}/>
        Login/Register
      </NavLink>
    </nav>
  )
}
