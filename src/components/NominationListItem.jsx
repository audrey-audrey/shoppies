import React from 'react'
import Button from "./Button";

export default function NominationListItem(props) {
  const { nominations, removeNomination } = props

  return (
    <>
      <h2>These are your nominations: </h2>
      <ul>
        {
          nominations && nominations.map((nomination) => {
            return (
              <h5>{nomination.Title} ({nomination.Year})
                <Button danger onClick={() => removeNomination(nomination.imdbID)}>Remove</Button></h5>
            )
          })
        }
      </ul>
    </>
  )
}