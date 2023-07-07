/* eslint-disable react/prop-types */
import titlecase from "../../utility/titlecase";
import styles from './drill.module.css'


export default function Settings({ drillActive, currentDifficulty, setDifficulty, currentTimeLimit, setTimeLimit }) {
    const difficulties = ['easy', 'medium', 'hard'];
    const difficultyOptions = difficulties.map((difficulty, index) => {
      return (
        <option key={index} value={difficulty}>
          {titlecase(difficulty)}
        </option>
      )
    })
  
    const timeLimits = [30, 60, 90, 120];
    const timeLimitOptions = timeLimits.map((time, index) => {
      return (
        <option key={index} value={time}>
          {time}
        </option>
      )
    })
  
    return (
      <form className={styles.settings}>
        <div className={styles.difficulty}>
          <label htmlFor="difficulty">Difficulty</label>
          <select defaultValue={currentDifficulty} onChange={event => setDifficulty(event.target.value)} id="difficulty" disabled={drillActive}> 
            {difficultyOptions}
          </select>
        </div>
  
        <div className={styles.timeLimit}>
          <label htmlFor="timeLimit">Time Limit</label>
          <select defaultValue={currentTimeLimit} onChange={event => setTimeLimit(event.target.value)} id="timeLimit" disabled={drillActive}>
            {timeLimitOptions}
          </select>
        </div>
      </form>
    )
  }