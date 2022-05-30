import React, { useState, useEffect } from 'react'
import MovieFilter from './MovieFilter'
import MovieList from './MovieList'
import { useSearch } from '../context/SearchProvider'
import api from '../../utils/movieApi'

const MoviePage = () => {
  const { 
    // searchText: filteredMovie, 
    // setSearchText: setFilteredMovie,
    movies,
    setMovies
  } = useSearch()

  useEffect(() => {
    const discoverMovies = async () => {
      const fetchedMovies = await api.getFeaturedMovies()

      if (fetchedMovies.results) {
        setMovies(fetchedMovies.results)
      }
    }
    discoverMovies().catch(error => console.log(error))
  }, [])

  

  return (
    <div>
      <MovieList movies={movies} />
    </div>
  )
}

export default MoviePage
