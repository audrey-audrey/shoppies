import React from 'react'
import Button from "./Button";

import "../styles/MovieListItem.scss";

export default function NominationListItem(props) {
  const { nominations, removeNomination } = props

  return (
    <div className="container-fluid d-flex justify-content-center">
      {nominations.length > 0 && <h2>Here are your nominees: </h2>}
      <div className="row">
        {
          nominations && nominations.map((nomination) => {
            return (
              <div className="card text-center" key={nomination.imdbID}>
                <div className="overflow">
                  <img src={nomination.Poster} alt={nomination.Title} className="card-img" />
                  <div className="card__content">
                    <div className="card__title">{nomination.Title} ({nomination.Year})</div>
                  </div>
                  <div className="btn">
                    <Button danger onClick={() => removeNomination(nomination.imdbID)}>Remove</Button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

