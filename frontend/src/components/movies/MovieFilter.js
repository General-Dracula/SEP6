import React from 'react'
import { useSearch } from '../context/SearchProvider'
import api from '../../utils/movieApi'

const MovieFilter = () => {
  
  const {
    searchText: filteredMovie, 
    setSearchText: setFilteredMovie,
    setMovies
  } = useSearch()

  const handleMovieFilter = ({ target: { value } }) => {
    setFilteredMovie(value)
  }

  const handleMovieSearch = async event => {
    event.preventDefault()

    if (filteredMovie) {
      try {
        const searchedMovies = await api.searchMovie(filteredMovie)
        setMovies(searchedMovies.results)
      } catch (error) {
        console.log(
          `Failed searching for movies: ${filteredMovie}, error: ${error}`
        )
      }
    }

    setFilteredMovie('')
  }

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
