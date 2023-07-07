import { faBarsProgress, faCalendarDays, faCalendarWeek, faHistory, faInfinity, faLineChart, faMedal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './stats.module.css'
import Settings from "../drill/settings";

export default function Stats() {
  const highScore = 102;
  const averageScore = 90;

  const selectedDifficulty = 'medium';
  const selectedTimeLimit = 60;

  return (
    <>
      <h2>
      <FontAwesomeIcon icon={faBarsProgress} />
        Stats
      </h2>

      <div className={styles.main}> 
        <section className={styles.summary}>
          <h3>
            Summary
          </h3>
          <div className={styles.container}>
            <div className={styles.highScore}>
              HIGH SCORE
              <div>{highScore}</div>
            </div>
            <div className={styles.averageScore}>
              Average Score
              <span>{averageScore}</span>
            </div>
            <Settings currentDifficulty={selectedDifficulty} currentTimeLimit={selectedTimeLimit}/>
          </div>
        </section>

        <section className={styles.activity}>
          <h3>
            <FontAwesomeIcon icon={faLineChart}/>
            Activity
          </h3>
          <div className={styles.container}>
            <p>
              <span>Total games played</span>
              <span></span>
            </p>
            <p>
              <span>Easy games played</span>
              <span></span>
            </p>
            <p>
              <span>Medium games played</span>
              <span></span>
            </p><p>
              <span>Hard games played</span>
              <span></span>
            </p>
          </div>
        </section>

        <section className={styles.topscores}>
          <h3>
            <FontAwesomeIcon icon={faMedal}/>
            Top Scores
          </h3>
          <div className={styles.container}>

          </div>
        </section>
        <section className={styles.recentscores}>
          <h3>
            <FontAwesomeIcon icon={faHistory}/>
            Recent Scores
          </h3>
          <div className={styles.container}>
            
          </div>
        </section>
      </div>
    </>
  );
}
