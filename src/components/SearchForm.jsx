import React, { useState } from 'react'

export default function SearchForm(props) {
  const [movie, setMovie] = useState("")

  const handleChange = (event) => {
    const valueTyped = event.target.value

    if (valueTyped) {
      setCity(valueTyped)
    }
  }

  

  return (
    <form>
      <input type="text" name="movie" placeholder="Enter movie name" />
      <button type="submit">Find the movie!</button>
    </form>
  )
}