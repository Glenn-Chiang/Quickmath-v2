/* eslint-disable react/prop-types */
import { faBarsProgress, faCalendar, faClock, faGear, faHistory, faMedal, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './stats.module.css'
import Settings from "../../components/settings/settings";
import { useLoaderData } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../authContext";
import History from "./history/history";
import formatDate from "../../utility/formatDate";

export default function Stats() {
  const results = useLoaderData();
  
  const user = useContext(AuthContext);

  
  if (!user) {
    return <p>Sign in to view your stats</p>
  }

  return (
    <>
      <div className={styles.main}> 
        <section className={styles.summary}>
          <div className={styles.container}>
            <Summary results={results}/>
          </div>
        </section>

        <section className={styles.topscores}>
          <div className={styles.container}>
            <TopScores results={results}/>
          </div>
        </section>

        <section className={styles.recent}>
          <History results={results}/>
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
        <FontAwesomeIcon icon={faTrophy} />
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
 

function TopScores({results}) {
  const [selectedDifficulty, setDifficulty] = useState('medium');
  const [selectedTimeLimit, setTimeLimit] = useState('60');

  const selectedResults = results.filter(result => result.difficulty === selectedDifficulty && result.timeLimit === selectedTimeLimit);
  const topResults = selectedResults.length > 5 ? selectedResults.sort((a,b) => b.score - a.score).slice(0,5) : selectedResults.sort((a,b) => b.score - a.score);
  
  const topScoresList = topResults.map((result, index) => {
    return (
      <li key={index}>
        <div>
          <span>{result.score}</span>
          <span>{formatDate(result.date)}</span>
        </div>
      </li>
    )
  })

  return (
    <>
      <h2>
        <FontAwesomeIcon icon={faMedal}/>
        Top Scores
      </h2>
      <div>
      <Settings currentDifficulty={selectedDifficulty} setDifficulty={setDifficulty} currentTimeLimit={selectedTimeLimit} setTimeLimit={setTimeLimit}/>
      </div>
      <ol>
        {topScoresList.length > 0 ? topScoresList : <p>No scores recorded</p>}
      </ol>
    </>
  )
}
