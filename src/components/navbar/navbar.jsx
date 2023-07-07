import { NavLink } from "react-router-dom";
import styles from './navbar.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsProgress, faPlayCircle, faSignIn, faSignOut, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { AuthContext } from "../../authContext";

export default function Navbar() {
  const user = useContext(AuthContext);
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
      {
        user ? 
        <NavLink to={'/signOut'} className={({isActive}) => isActive ? styles.active : ''}>
          <FontAwesomeIcon icon={faSignOut}/>
          Sign Out
        </NavLink>
        :
        <NavLink to={'/signIn'} className={({isActive}) => isActive ? styles.active : ''}>
          <FontAwesomeIcon icon={faSignIn}/>
          Login/Register
        </NavLink>
      }
    </nav>
  )
}
