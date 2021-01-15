// Packages
import React, { useState } from 'react'
import axios from 'axios';

// Components
import MovieListItem from './components/MovieListItem';
import SearchForm from './components/SearchForm'

// Styling
import './App.css';

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
