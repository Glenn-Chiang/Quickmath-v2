/* eslint-disable react/prop-types */
import { faBarsProgress, faHistory, faLineChart, faMedal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './stats.module.css'
import Settings from "../../components/settings/settings";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import formatDate from '../../utility/formatDate'
import RecentActivity from "./recentActivity/recentActivity";

export default function Stats() {
  const results = useLoaderData();
  
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
            <Summary results={results}/>
          </div>
        </section>

        <section className={styles.topscores}>
          <h3>
            <FontAwesomeIcon icon={faMedal}/>
            Top Scores
          </h3>
          <div className={styles.container}>
            <TopScores results={results}/>
          </div>
        </section>

        <section className={styles.recentscores}>
          <h3>
            <FontAwesomeIcon icon={faHistory}/>
            Recent Activity
          </h3>
          <div className={styles.container}>
            <RecentActivity results={results} />
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
        HIGH SCORE
        <div>{highScore}</div>
      </div>
      <div className={styles.averageScore}>
        Average Score
        <span>{averageScore.toFixed(1)}</span>
      </div>
      <Settings currentDifficulty={selectedDifficulty} setDifficulty={setDifficulty} currentTimeLimit={selectedTimeLimit} setTimeLimit={setTimeLimit}/>
    </>
  )
}


function TopScores({results}) {
  const [selectedDifficulty, setDifficulty] = useState('medium');
  const [selectedTimeLimit, setTimeLimit] = useState('60');

  const selectedResults = results.filter(result => result.difficulty === selectedDifficulty && result.timeLimit === selectedTimeLimit);

  const topResults = selectedResults.length > 10 ? selectedResults.sort((a,b) => b.score - a.score).slice(10) : selectedResults.sort((a,b) => b.score - a.score);

  const scoresList = topResults.map((result, index) => {
    return (
      <li key={index}>
        {result.score}
      </li>
    )
  })

  return (
    <>
      <Settings currentDifficulty={selectedDifficulty} setDifficulty={setDifficulty} currentTimeLimit={selectedTimeLimit} setTimeLimit={setTimeLimit}/>
      <ol>
        {topResults.length > 0 ? scoresList : <p>No scores recorded</p>}
      </ol>
    </>
  )
}


