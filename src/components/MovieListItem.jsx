import React from 'react'
import Button from "./Button";

export default function MovieListItem(props) {
  const { search, results } = props

  return (
    <>
    {search && <h2>These are the search results for {search}</h2>}
    <ul>
      {
        results && results.map((result) => {
          return (
            <h5>{result.Title} ({result.Year}) <Button confirm>Nominate</Button></h5>
          )
        })
      }
    </ul>
    </>
  )
}