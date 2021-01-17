import React, { useState } from 'react'
import Button from "./Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import "../styles/SearchForm.scss";

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
          class="search-box"
        />
        <Button search type="submit"><FontAwesomeIcon icon={faSearch} /></Button>
      </form>
    </div>
  )
}