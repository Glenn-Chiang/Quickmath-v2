/* eslint-disable react/prop-types */
import styles from './redButton.module.css'

export default function RedButton({text, handleClick}) {
  return <button className={styles.button} onClick={handleClick}>{text}</button>
}