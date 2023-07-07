import titlecase from "../../../utility/titlecase";
import styles from './result.module.css'

export default function Result({ score, difficulty, timeLimit, resetDrill }) {
  const handleSave = () => {
    // Save score
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
        <button className={styles.save} onClick={handleSave}>Save score</button>
        <button className={styles.retry} onClick={handleRetry}>Retry</button>
      </div>
    </div>
  )
}
