/* eslint-disable react/prop-types */
import { faBarsProgress, faHistory, faMedal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './stats.module.css'
import Settings from "../../components/settings/settings";
import { useLoaderData } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../authContext";
import ScoresList from "./scoresList/scoresList";

export default function Stats() {
  const results = useLoaderData();
  
  const user = useContext(AuthContext);

  if (!user) {
    return <p>Sign in to view your stats</p>
  }

  return (
    <>
      <h2>
      <FontAwesomeIcon icon={faBarsProgress} />
        Stats
      </h2>

      <div className={styles.main}> 
        <section className={styles.summary}>
          <div className={styles.container}>
            <Summary results={results}/>
          </div>
        </section>

        <section className={styles.recent}>
          <h3>
            <FontAwesomeIcon icon={faHistory}/>
            History
          </h3>
          <div className={styles.container}>
            <ScoresList results={results} />
          </div>
        </section>
      </div>
    </>
  );
}


function Summary({results}) {
  const [selectedDifficulty, setDifficulty] = useState('medium');
  const [selectedTimeLimit, setTimeLimit] = useState('60');

  const selectedResults = results.filter(result => result.difficulty === selectedDifficulty && result.timeLimit === selectedTimeLimit);
  const highScore = selectedResults.length > 0 ? selectedResults.reduce((prev, current) => prev.score > current.score ? prev : current).score : 0;
  const averageScore = ((selectedResults.reduce((runningSum, result) => runningSum + result.score, 0)) / selectedResults.length) || 0;
  
  return (
    <>
      <div className={styles.highScore}>
        <FontAwesomeIcon icon={faMedal} />
        HIGH SCORE
        <div>{highScore}</div>
      </div>
      <div className={styles.averageScore}>
        Average Score
        <span>{averageScore.toFixed(1)}</span>
      </div>
      <div className={styles.settings}>
        <Settings currentDifficulty={selectedDifficulty} setDifficulty={setDifficulty} currentTimeLimit={selectedTimeLimit} setTimeLimit={setTimeLimit}/>
      </div>
    </>
  )
}
 


