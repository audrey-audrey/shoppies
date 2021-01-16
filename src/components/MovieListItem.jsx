import React from 'react'
// import SearchForm from './SearchForm'

export default function MovieListItem(props) {
  const { search, results } = props

  return (
    <ul>
      {
        results && results.map((result) => {
          return (
            <h5>{result.Title}</h5>
          )
        })
      }
    </ul>
  )
}