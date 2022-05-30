import React from 'react'

const MovieFilter = ({
  filteredMovie,
  handleMovieFilter,
  handleMovieSearch,
}) => {
  return (
    <header>
      <form onSubmit={handleMovieSearch}>
        <input
          value={filteredMovie}
          onChange={handleMovieFilter}
          placeholder="Search..."
          type="search"
          name="filterMovie"
        />
      </form>
    </header>
  )
}

export default MovieFilter
