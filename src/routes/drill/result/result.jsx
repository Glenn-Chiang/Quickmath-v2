/* eslint-disable react/prop-types */
import { useContext } from "react";
import titlecase from "../../../utility/titlecase";
import styles from './result.module.css'
import { AuthContext } from "../../../authContext";
import saveScore from "../../../firestore/saveScore";

export default function Result({ score, difficulty, timeLimit, resetDrill }) {
  const user = useContext(AuthContext);

  const handleSave = async () => {
    await saveScore(user, difficulty, timeLimit, score);
    resetDrill();
  }
  
  const handleRetry = () => {
    resetDrill();
  }

  return (
    <div className={styles.main}>
      <p className={styles.score}><span>Score</span> <span>{score}</span></p>
      <div className={styles.settings}>
        <p><span>Difficulty</span> <span>{titlecase(difficulty)}</span></p>
        <p><span>Time Limit</span> <span>{timeLimit}</span></p>
      </div>
      <div className={styles.buttons}>
        <button className={styles.save} onClick={handleSave} disabled={!user}>
          Save score
        </button> 
        <button className={styles.retry} onClick={handleRetry}>Retry</button>
      </div>
      {
        !user && <p>Sign in to save your scores</p>
      }
    </div>
  )
}
