import React from 'react'

const Movies = ({ movies, text }) => {
  return (
    <div className="Movies">
      <h2>Search Results for "{text}"</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.imdbID}>
            {movie.Title} ({movie.Year}) {" "} <button>Nominate</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Movies
