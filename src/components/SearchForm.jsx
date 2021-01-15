import React, { useState } from 'react'

export default function SearchForm(props) {
  const {updateMovie} = props
  const [movie, setMovie] = useState("")

  const handleChange = (event) => {
    const valueTyped = event.target.value

    if (valueTyped) {
      setMovie(valueTyped)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    updateMovie(movie)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="movie" placeholder="Enter movie name" onChange={handleChange}/>
      <button type="submit">Find the movie!</button>
    </form>
  )
}