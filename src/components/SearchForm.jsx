import React, { useState } from 'react'

export default function SearchForm(props) {
  const {updateSearch} = props
  const [search, setSearch] = useState("")

  const handleChange = (event) => {
    const valueTyped = event.target.value

    if (valueTyped) {
      setSearch(valueTyped)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    updateSearch(search)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="movie" placeholder="Enter movie name" onChange={handleChange}/>
      <button type="submit">Find the movie!</button>
    </form>
  )
}