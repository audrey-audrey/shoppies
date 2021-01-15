import logo from './logo.svg';
import './App.css';
import MovieListItem from './components/MovieListItem';

function App() {
  const [currentMovie, setCurrentMovie] = useState("")
  return (
    <div className="App">
      <MovieListItem />
    </div>
  );
}

export default App;
