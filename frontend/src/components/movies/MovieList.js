import React from 'react'
import MovieListItem from './MovieListItem'
import { Link } from 'react-router-dom'
import { Flex } from '@chakra-ui/react'

const MovieList = ({ movies }) => {
  return (
    <Flex
      flexWrap='wrap'
      justifyContent='start'
      gridGap='3rem'
      mb='3rem'
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
