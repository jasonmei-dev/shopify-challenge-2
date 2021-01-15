import React, { useState } from 'react'

const SearchBar = ({ searchMovies }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    searchMovies(title);
    setTitle("");
  }

  const handleChange = e => {
    setTitle(e.target.value);
  }

  return (
    <div className='Search'>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" value={title}onChange={handleChange}/>
        <input type="submit"/>
      </form>
    </div>
  )
}

export default SearchBar
