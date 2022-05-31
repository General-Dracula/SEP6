import React, { useEffect } from 'react'
import MovieList from './MovieList'
import { useSearch } from '../context/SearchProvider'
import api from '../../utils/movieApi'
import { Heading } from '@chakra-ui/react'

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

  useEffect(() => {
    document.title = 'Home | MovieCult'
    return () => document.title = 'MovieCult'
  }, [])

  return movies.length > 0 ?
    (
      <MovieList movies={movies} />
    )
  :
    <Heading as='h1'>
      No movies found...
    </Heading>
}

export default MoviePage
