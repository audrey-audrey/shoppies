// Packages
import React, { useEffect, useState } from 'react'
import axios from 'axios';

// Components
import Header from './components/Header'
import SearchForm from './components/SearchForm'
import MovieListItem from './components/MovieListItem';
import NominationListItem from './components/NominationListItem';

// Styling
import './App.css';

// API key
const API_KEY = process.env.REACT_APP_API_KEY

function App() {
  let [currentSearch, setCurrentSearch] = useState("")
  let [currentResult, setCurrentResult] = useState("")
  let [nominations, setNominations] =useState([])

  const updateSearch = search => setCurrentSearch(search)
  const updateNominations = nominee => setNominations([...nominations, nominee])
  
  const removeNomination = function(imdbID) {
    const newList = nominations.filter((nomination) => nomination.imdbID !== imdbID)

    setNominations(newList)
  }

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
      <Header title="The Shoppies"/>
      <SearchForm {...{ updateSearch }} />
      <MovieListItem
        search={currentSearch}
        results={currentResult}
        nominations={nominations}
        {...{ updateNominations }}
      />
      <NominationListItem 
        nominations={nominations}
        {...{ removeNomination }}
      />
    </div>
  );
}

export default App;
