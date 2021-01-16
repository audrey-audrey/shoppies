import React from 'react'
import Button from "./Button";

export default function NominationListItem(props) {
  const {nominations} = props

  return (
    <>
      <h2>These are your nominations: </h2>
      <ul>
        {
          nominations && nominations.map((nomination) => {
            return (
              <h5>{nomination.Title} ({nomination.Year})
                <Button danger>Remove</Button></h5>
            )
          })
        }
      </ul>
    </>
  )
}