import React, { useState } from 'react'
import './App.css';
import MovieListItem from './components/MovieListItem';
import SearchForm from './components/SearchForm'

function App() {
  const [currentMovie, setCurrentMovie] = useState("")

  const updateMovie = movie => setCurrentMovie(movie)

  return (
    <div className="App">
      <SearchForm {...{updateMovie}} />
      <MovieListItem />
    </div>
  );
}

export default App;
