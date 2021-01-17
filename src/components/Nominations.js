import React from 'react'

const Nominations = ({ nominations, removeNomination }) => {
  return (
    <div>
      <h2>Nominations</h2>
      <ul>
        {nominations.map(nomination => (
          <li key={nomination.imdbID}>
            {nomination.Title} ({nomination.Year}) {" "} <button onClick={() => removeNomination(nomination)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Nominations
