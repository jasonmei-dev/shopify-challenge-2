import React from 'react'

const SearchBar = ({ text, onChange, resetText }) => {
  return (
    <div className='SearchBar'>
      <label htmlFor="text">Movie Title </label>
      <input type="text" name="title" value={text} onChange={onChange}/>
      <button onClick={resetText}>Reset</button>
    </div>
  )
}

export default SearchBar
