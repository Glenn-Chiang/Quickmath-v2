/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import formatDate from "../../../utility/formatDate";
import styles from "./scoresList.module.css";
import {
  faBarsProgress,
  faBullseye,
  faCalendar,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import titlecase from "../../../utility/titlecase";

export default function ScoresList({ results, startIndex }) {

  const recentResults =
    results.length > 10
      ? [...results].reverse().slice(startIndex, startIndex + 10)
      : [...results].reverse();

  // const topResults = selectedResults.length > 5 ? selectedResults.sort((a,b) => b.score - a.score).slice(0,5) : selectedResults.sort((a,b) => b.score - a.score);

  const resultList = recentResults.map((result, index) => {
    return (
      <li key={index} className={styles[result.difficulty]}>
        <p>
          <FontAwesomeIcon icon={faBullseye}/>
          Score:   
          <span>{result.score}</span>
        </p>        
        <div>
          <p>
            <FontAwesomeIcon icon={faBarsProgress}/>
            <span>{titlecase(result.difficulty)}</span>
          </p>
          <p>
            <FontAwesomeIcon icon={faClock}/>
            <span>{result.timeLimit}</span>
          </p>
          <p>
            <FontAwesomeIcon icon={faCalendar}/>
            {formatDate(result.date)}
          </p>
        </div>
      </li>
    )
  })

  return (
    <>
      <ul className={styles.resultList}>
        {resultList}
      </ul>
    </>
  );
}
