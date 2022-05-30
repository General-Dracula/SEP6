import React from 'react'
import MovieListItem from './MovieListItem'
import { Link } from 'react-router-dom'

const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.map(movie => {
        return (
          <Link key={movie.id} to={`/${movie.id}`}>
            <MovieListItem {...movie} />
          </Link>
        )
      })}
    </div>
  )
}

export default MovieList
