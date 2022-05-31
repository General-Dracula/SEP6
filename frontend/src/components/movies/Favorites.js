import React, { useState, useEffect } from 'react'
import MovieListItem from './MovieListItem'
import { useAuth } from '../context/AuthProvider'
import movieApi from '../../utils/movieApi'
import userApi from '../../utils/userApi'
import { Link } from 'react-router-dom'
import { Flex, Heading } from '@chakra-ui/react'

const Favorites = () => {
  const [favMoviesList, setFavMoviesList] = useState([])
  const { savedEmail } = useAuth()

  const fetchMovie = async movieId => {
    const fetchedMovie = await movieApi.getMovieDetails(movieId)

    return fetchedMovie
  }

  useEffect(() => {
    document.title = 'Favorites | MovieCult'
    return () => document.title = 'MovieCult'
  }, [])

  useEffect(() => {
    const fetchFavs = async () => {
      const fetchedMoviesId = await userApi.getFavs(savedEmail)

      let fetchedMovies = []
      for (const movieId of fetchedMoviesId) {
        const fetchedMovie = await fetchMovie(movieId)
        fetchedMovies.push(fetchedMovie)
      }

      setFavMoviesList(fetchedMovies)
    }

    fetchFavs().catch(error => console.log(error))
  }, [savedEmail])


  return (
    <Flex 
      flexDir='column'
      w='100%'
    >
      <Heading as='h1'>Favorites:</Heading>
      <Flex flexWrap='wrap' gridGap='3rem'>
        {favMoviesList.map(movie => {
          return (
            <Link
              key={movie.id}
              to={`/${movie.id}`}
              style={{ textDecoration: 'none' }}
            >
              <MovieListItem {...movie} />
            </Link>
          )
        })}
      </Flex>
    </Flex>
  )
}

export default Favorites
