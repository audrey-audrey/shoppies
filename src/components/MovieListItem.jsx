import React from 'react'
import Button from "./Button";

export default function MovieListItem(props) {
  const { search, results, updateNominations } = props

  // const handleSubmit = (event) => {
  //   event.preventDefault()
  // }

  return (
    <>
      {search && <h2>These are the search results for: {search}</h2>}
      <ul>
        {
          results && results.map((result) => {
            return (
              <h5>{result.Title} ({result.Year})
                <Button confirm onClick={() => updateNominations({Title: result.Title, Year: result.Year})}>Nominate</Button></h5>
            )
          })
        }
      </ul>
    </>
  )
}