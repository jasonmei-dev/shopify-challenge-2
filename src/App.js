import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Movies from './components/Movies';

const App = () => {

  return (
    <div className="App">
      <h1>The Shoppies</h1>
      <SearchBar />
      <Movies />
    </div>
  );
}

export default App;
