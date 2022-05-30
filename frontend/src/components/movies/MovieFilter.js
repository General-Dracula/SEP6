import React from 'react'
import { useSearch } from '../context/SearchProvider'
import api from '../../utils/movieApi'
import { Input } from '@chakra-ui/react'
import { colors } from '../../utils/constants'

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
        <Input
          value={filteredMovie}
          onChange={handleMovieFilter}
          placeholder="Search..."
          type="search"
          name="filterMovie"

          bgColor={colors.card}
          color={colors.text}
          border='none'
          borderRadius='0.5rem'
          h='2rem'
          maxW='20rem'
          w='20rem'
          px='1rem'
          py='0.5rem'
          overflow='hidden'
        />
      </form>
    </header>
  )
}

export default MovieFilter
