import { faBarsProgress } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './stats.module.css'
import Settings from "../drill/settings";

export default function Stats() {
  const highScore = 100;
  const averageScore = 90;

  const selectedDifficulty = 'medium';
  const selectedTimeLimit = 60;

  return (
    <>
      <h2>
      <FontAwesomeIcon icon={faBarsProgress} />
        Stats
      </h2>
      <div className={styles.container}>
        <div className={styles.highScore}>
          High Score
          <span>{highScore}</span>
        </div>
        <div>
          Average Score
          <span>{averageScore}</span>
        </div>
        <Settings currentDifficulty={selectedDifficulty} currentTimeLimit={selectedTimeLimit}/>
      </div>
    </>
  );
}
