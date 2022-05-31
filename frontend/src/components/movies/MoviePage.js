import React, { useEffect, useMemo } from 'react'
import MovieList from './MovieList'
import { useSearch } from '../context/SearchProvider'
import api from '../../utils/movieApi'
import { Flex, Heading } from '@chakra-ui/react'
import CategoryContainer from '../categories/CategoryContainer'

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

  const moviePart = useMemo(() => {

    return movies.length > 0 ?
        (
          <MovieList movies={movies} />
        )
      :
        <Heading as='h1'>
          No movies found...
        </Heading>
  }, [movies]) 

  return (
    <>
      {moviePart}
      <CategoryContainer />
    </>
  )


}

export default MoviePage
