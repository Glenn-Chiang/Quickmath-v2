/* eslint-disable react/prop-types */
import formatDate from "../../../utility/formatDate";

export default function RecentActivity({results}) {
    const recentResults = results.length > 10 ? results.slice(-10).reverse() : results.slice().reverse();
  
    const resultsList = recentResults.map((result, index) => {
      return (
        <tr key={index}>
          <td>
            {formatDate(result.date)}
          </td>
          <td>
            {result.difficulty}
          </td>
          <td>
            {result.timeLimit}
          </td>
          <td>
            {result.score}
          </td>
        </tr>
      )
    })
  
    return (
      <>
        <table>
          <thead>
            <td>
              Date
            </td>
            <td>
              Difficulty
            </td>
            <td>
              Time Limit
            </td>
            <td>
              Score
            </td>
          </thead>
          <tbody>
            {resultsList}
          </tbody>
        </table>
      </>
    )
  }