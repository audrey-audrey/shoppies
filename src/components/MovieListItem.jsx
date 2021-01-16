import React from 'react'
// import SearchForm from './SearchForm'

export default function MovieListItem(props) {
  const { search, results } = props

  return (
    <>
    {search && <h2>These are the search results for {search}</h2>}
    <ul>
      {
        results && results.map((result) => {
          return (
            <h5>{result.Title} ({result.Year})</h5>
          )
        })
      }
    </ul>
    </>
  )
}