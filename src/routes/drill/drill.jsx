/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import Banner from "../../components/banner";
import Settings from "../../components/settings/settings";

import styles from './drill.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faPlayCircle, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";

import generateProblem from "../../mechanics/generateProblem";
import Result from "./result/result";

export default function Drill() {
  const [drillState, setDrillState] = useState('predrill'); // predrill, active, postdrill
  
  const [difficulty, setDifficulty] = useState('medium');
  const [timeLimit, setTimeLimit] = useState('60');
  
  const [problem, setProblem] = useState(generateProblem(difficulty));
  const [score, setScore] = useState(0);

  // Check user's answer
  const handleSubmit = event => {
    event.preventDefault();
    const answer = Number(event.target.answer.value);
    if (answer === problem.solution) {
      setProblem(generateProblem(difficulty));
      setScore(score + 1);
    }
    event.target.answer.value = '';
  }

  const startDrill = () => {
    setDrillState('active');
    setProblem(generateProblem(difficulty));
  }
  
  const endDrill = () => { // When user finishes drill
    setDrillState('postdrill');
  }

  const resetDrill = () => {
    setDrillState('predrill');
    setScore(0);
  }

  return (
    <>
      <Banner/>
      <Settings drillActive={drillState !== 'predrill'} currentDifficulty={difficulty} setDifficulty={setDifficulty} currentTimeLimit={timeLimit} setTimeLimit={setTimeLimit}/>

      <div className={styles.window}>
        {
          drillState === 'postdrill' ? 
          <Result score={score} difficulty={difficulty} timeLimit={timeLimit} resetDrill={resetDrill}/> 
          :
          <div>
            <div className={styles.info}>
              <div className={styles.time}>
                <span>
                  <FontAwesomeIcon icon={faClock} />
                </span>
                { drillState === 'active' ? <Timer timeLimit={timeLimit} endDrill={endDrill}/>
                  : <span>{timeLimit}</span>
                }
              </div>
              <div className={styles.score}>
                <span>Score</span>
                <span>{score}</span>
              </div>
            </div>
            { drillState === 'active' ?
              <Problem problem={problem} handleSubmit={handleSubmit}/>
              :
              <button className={styles.startBtn} onClick={startDrill}>
                <FontAwesomeIcon icon={faPlayCircle}/>
                Start
              </button>
            }
          </div>
        }
      </div> 
      {
        drillState === 'active' && 
        <button onClick={resetDrill} className={styles.quitBtn}>
          <FontAwesomeIcon icon={faXmarkCircle}/>
          Quit
        </button> 
      }
    </>
    )
}


function Timer({ timeLimit, endDrill }) {
  const [timeLeft, setTimeLeft] = useState(timeLimit);

  useEffect(() => {
    const timer = setInterval(() => {
        setTimeLeft(timeLeft => timeLeft - 1);
    }, 1000);
    // Clean up timer when unmounted
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      endDrill();
    }
  }, [timeLeft]);

  return <span className={timeLeft > 5 ? styles.timeLeft : styles.timeLeftRed}>{timeLeft}</span>
}


function Problem({ problem, handleSubmit }) {
  const problemStatement = `${problem.num1} ${problem.operator} ${problem.num2} =`
  
  const inputRef = useRef(null);

  // When drill starts, focus on answer input field
  useEffect(() => {
    inputRef.current.focus();
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="answer">{problemStatement}</label>
      <input type="number" id="answer" name="answer" className={styles.answer} ref={inputRef}/>
    </form>
  )
}