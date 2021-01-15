// Packages
import React, { useEffect, useState } from 'react'
import axios from 'axios';

// Components
import MovieListItem from './components/MovieListItem';
import SearchForm from './components/SearchForm'

// Styling
import './App.css';

function App() {
  let [currentSearch, setCurrentSearch] = useState("rambo")
  let [currentResult, setCurrentResult] = useState("")

  const updateSearch = search => setCurrentSearch(search)

  const API_KEY = process.env.REACT_APP_API_KEY

  useEffect(() => {
    console.log("Starting API call ")
    axios
      .get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${currentSearch}&type=movie`)
      .then(res => {
        console.log(res.data)
        setCurrentResult(res.data.Search)})
  }, [])


  return (
    <div className="App">
      <SearchForm {...{ updateSearch}} />
      <MovieListItem />
    </div>
  );
}

export default App;
