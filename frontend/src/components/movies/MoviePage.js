import React, { useEffect } from 'react'
import MovieList from './MovieList'
import { useSearch } from '../context/SearchProvider'
import api from '../../utils/movieApi'

const MoviePage = () => {
  const { 
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
  }, [setMovies])

  

  return (
    <MovieList movies={movies} />
  )
}

export default MoviePage
