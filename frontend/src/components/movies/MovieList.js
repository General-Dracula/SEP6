import React from 'react'
import MovieListItem from './MovieListItem'
import { Link } from 'react-router-dom'
import { Box, Flex } from '@chakra-ui/react'

const MovieList = ({ movies }) => {
  return (
    <Flex
      flexWrap='wrap'
      justifyContent='center'
      gridGap='1.5rem'
    >
      {movies.map(movie => {
        return (
          <Link key={movie.id} to={`/${movie.id}`} style={{textDecoration: 'none'}}>
            <MovieListItem {...movie} />
          </Link>
        )
      })}
    </Flex>
  )
}

export default MovieList
