import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import Movies from './components/Movies';
import Nominations from './components/Nominations';

import axios from 'axios';
import './App.css';

const App = () => {
  const [text, setText] = useState("");
  const [movies, setMovies] = useState([]);
  const [nominations, setNominations] = useState([]);

  const searchMovies = async (text) => {
    const res = await axios.get(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${text}`);
    
    setMovies(res.data.Search || []);
  }

  useEffect(() => {
    if (text.trim() !== "") {
      searchMovies(text);
    }
  }, [text]);

  const isNominated = movie => !!nominations.find(nomination => nomination.imdbID === movie.imdbID);

  const addNomination = movie => {
    if (nominations.length < 5) {
      setNominations([...nominations, movie]);
    } else {
      alert('You already have 5 nominations!');
    }
  }

  const removeNomination = movie => {
    setNominations(nominations.filter(nomination => nomination.imdbID !== movie.imdbID));
  }

  return (
    <div className="App">
      <h1>The Shoppies</h1>
      <SearchBar text={text} onChange={(e) => setText(e.target.value)} />
      <Movies movies={movies} text={text} addNomination={addNomination} isNominated={isNominated} />
      <Nominations nominations={nominations} removeNomination={removeNomination} />
    </div>
  );
}

export default App;
