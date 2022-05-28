import React from 'react'

const MovieFilter = ({
  filteredMovie,
  handleMovieFilter,
  handleMovieSearch,
}) => {
  return (
    <header className="bg-teal p-3 rounded">
      <form onSubmit={handleMovieSearch}>
        <input
          value={filteredMovie}
          onChange={handleMovieFilter}
          placeholder="Search..."
          className="rounded-lg text-lg text-black border-emerald-600 border-4 border-solid"
          type="search"
          name="filterMovie"
        />
      </form>
    </header>
  )
}

export default MovieFilter
