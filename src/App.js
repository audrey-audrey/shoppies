// Packages
import React, { useEffect, useState } from 'react'
import axios from 'axios';

// Components
import MovieListItem from './components/MovieListItem';
import SearchForm from './components/SearchForm'

// Styling
import './App.css';

// API key
const API_KEY = process.env.REACT_APP_API_KEY

function App() {
  let [currentSearch, setCurrentSearch] = useState("")
  let [currentResult, setCurrentResult] = useState("")

  const updateSearch = search => setCurrentSearch(search)


  useEffect(() => {
    console.log("Starting API call ")
    axios
      .get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${currentSearch}&type=movie`)
      .then(res => {
        setCurrentResult(res.data.Search)
      })
  }, [currentSearch])


  return (
    <div className="App">
      <SearchForm {...{ updateSearch }} />
      <MovieListItem
        search={currentSearch}
        results={currentResult}
      />
    </div>
  );
}

export default App;
