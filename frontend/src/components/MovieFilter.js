import React from 'react'

const MovieFilter = ({ filteredMovie, handleMovieFilterChange }) => {
  return (
    <div>
      <input
        value={filteredMovie}
        onChange={handleMovieFilterChange}
        placeholder="Type to search for a movie"
      />
    </div>
  )
}

export default MovieFilter
