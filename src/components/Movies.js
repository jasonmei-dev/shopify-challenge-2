import React from 'react'

const Movies = ({ movies }) => {
  return (
    <div className="Movies">
      <h1>Movies</h1>
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
