import React, { useState } from 'react'
import Button from "./Button";

export default function SearchForm(props) {
  const { updateSearch } = props
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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="movie"
          placeholder="Enter movie name"
          onChange={handleChange}
        />
        <Button confirm type="submit">Search</Button>
      </form>
    </div>
  )
}