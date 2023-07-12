/* eslint-disable react/prop-types */
import { useState } from "react";
import ScoresList from "../scoresList/scoresList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faHistory } from "@fortawesome/free-solid-svg-icons";
import styles from './history.module.css'

export default function History({ results }) {
  const [startIndex, setStartIndex] = useState(0);
  const resultsPerPage = 10;

  const handlePrev = () => {
    if (startIndex === 0) {
      return;
    }
    setStartIndex(startIndex - resultsPerPage);
  }

  const handleNext = () => {
    if (startIndex + resultsPerPage > results.length - 1) {
      return;
    }
    setStartIndex(startIndex + resultsPerPage);
  }

  return (
    <>
      <div className={styles.header}>
        <h2>
          <FontAwesomeIcon icon={faHistory}/>
          History
        </h2>
        <div className={styles.buttons}>
          <button onClick={handlePrev}>
            <FontAwesomeIcon icon={faChevronLeft}/>
          </button>
          <button onClick={handleNext}>
            <FontAwesomeIcon icon={faChevronRight}/>
          </button>
        </div>
      </div>
      <div className={styles.container}>
        <ScoresList results={results} startIndex={startIndex} />
      </div>
    </>
  )
}