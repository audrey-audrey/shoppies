import React from 'react'
import Button from "./Button";

export default function MovieListItem(props) {
  const { search, results, nominations, updateNominations } = props
  // let [buttonClass, setButtonClass] = useState("confirm")

  const isNominated = function (result) {
    // if result is a nominee
    const nominee = nominations.some(nomination => nomination.imdbID === result)
    if (!nominee) return false;
    return true;
  };

  return (
    <>
      {search && <h2>These are the search results for: {search}</h2>}
      <ul>
        {
          results && results.map((result) => {
            return (
              <h5>{result.Title} ({result.Year})
                <Button confirm disabled={isNominated(result.imdbID)} onClick={() => {
                  updateNominations({ imdbID: result.imdbID, Title: result.Title, Year: result.Year })
                }
                }>Nominate</Button></h5>
            )
          })
        }
      </ul>
    </>
  )
}