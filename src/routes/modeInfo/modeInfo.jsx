import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { modeParams } from "../../mechanics/modeParams"
import titlecase from "../../utility/titlecase";
import { faMinusCircle, faPlusCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import styles from './modeInfo.module.css'

/* eslint-disable react/prop-types */
export default function ModeInfo({ mode }) {
  const params = modeParams[mode];

  return (
    <div className={`${styles.info} ${styles[mode]}`}>
      <p>
        {titlecase(mode)}
      </p>
      <ul>
        <li>
          ({params['+'].num1range.join(' to ')}) <FontAwesomeIcon icon={faPlusCircle}/> ({params['+'].num2range.join(' to ')})
        </li>
        <li>
          ({params['-'].num1range.join(' to ')}) <FontAwesomeIcon icon={faMinusCircle}/> ({params['-'].num2range.join(' to ')})
        </li>
        <li>
          ({params['x'].num1range.join(' to ')}) <FontAwesomeIcon icon={faTimesCircle}/> ({params['x'].num2range.join(' to ')})
        </li>
        { params['-'].allowNegative || <li>No negatives</li> }
      </ul>  
    </div>
  )
}