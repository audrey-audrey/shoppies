// Packages
import React, { useEffect, useState } from 'react'
import axios from 'axios';

// Components
import Nav from './components/Nav'
import SearchForm from './components/SearchForm'
import MovieListItem from './components/MovieListItem';
import NominationListItem from './components/NominationListItem';
import Notification from './components/Notification';

// Styling
import './styles/App.scss';

// API key
const API_KEY = process.env.REACT_APP_API_KEY

function App() {
  let [currentSearch, setCurrentSearch] = useState("")
  let [currentResult, setCurrentResult] = useState([])
  let [nominations, setNominations] = useState([])
  const [showNotification, setShowNotification] = useState(false);

  const updateSearch = search => setCurrentSearch(search)
  const updateNominations = nominee => setNominations([...nominations, nominee])

  const removeNomination = function (imdbID) {
    const newList = nominations.filter((nomination) => nomination.imdbID !== imdbID)

    setNominations(newList)
  }

  const closeModal = () => {
    setShowNotification(false);
  };

  useEffect(() => {
    console.log("Starting API call ")
    axios
      .get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${currentSearch}&type=movie`)
      .then(res => {
        setCurrentResult(res.data.Search)
      })
  }, [currentSearch])

  useEffect(() => {
    if (nominations.length === 5) {
      setShowNotification(true);
    }
  }, [nominations]);

  return (
    <div className="App">
      <Nav />
      {showNotification ? <Notification closeModal={closeModal} /> : null}
      <SearchForm {...{ updateSearch }} nominations={nominations}/>
      <div class="movie-nom-container">

        <main className="container">
          <ul className="cards">
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
          </ul>
        </main>

      </div>
    </div>
  );
}

export default App;
