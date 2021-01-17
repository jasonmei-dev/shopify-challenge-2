import React from 'react'

const SearchBar = ({ text, onChange }) => {

  return (
    <div className='SearchBar'>
      <label htmlFor="text">Movie Title </label>
      <input type="text" name="title" value={text} onChange={onChange}/>
    </div>
  )
}

export default SearchBar
