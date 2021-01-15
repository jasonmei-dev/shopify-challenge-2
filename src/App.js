import { useState } from 'react';
import SearchBar from './components/SearchBar';
import Movies from './components/Movies';

import axios from 'axios';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const res = await axios.get(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${title}`);

    setMovies(res.data.Search);
  }

  return (
    <div className="App">
      <h1>The Shoppies</h1>
      <SearchBar searchMovies={searchMovies}/>
      <Movies movies={movies}/>
    </div>
  );
}

export default App;
