import React from 'react'
import Button from "./Button";

export default function MovieListItem(props) {
  const { search, results, nominations, updateNominations } = props
  // let [buttonclassName, setButtonclassName] = useState("confirm")

  const isNominated = function (result) {
    // if nominations reaches 5
    if (nominations.length === 5) return true;
    // if result is a nominee
    const nominee = nominations.some(nomination => nomination.imdbID === result)
    if (!nominee) return false;

    return true;
  };

  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="row">
      {search && <h2>These are the search results for: {search}</h2>}
      {
        results && results.map((result) => {
          return (
            <div className="card text-center" key={result.imdbID}>
              <div className="overflow">
                <img src={result.Poster} alt={result.Title} />
                <div className="card__content">
                  <div className="card__title">{result.Title} ({result.Year})</div>
                </div>
                <Button
                  confirm
                  disabled={isNominated(result.imdbID)}
                  onClick={() => updateNominations({ imdbID: result.imdbID, Title: result.Title, Year: result.Year })
                  }>
                  Nominate
                    </Button>
              </div>
            </div>
          )
        })
      }
      </div>

    </div>
  )
}