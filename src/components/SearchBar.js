import React, { useState } from 'react'

const SearchBar = () => {
  const [title, setTitle] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log(title);
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
