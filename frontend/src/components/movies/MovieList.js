import React from 'react'
import MovieListItem from './MovieListItem'
import { Link } from 'react-router-dom'

const MovieList = ({ movies }) => {
  return (
    <div className="flex flex-row flex-wrap justify-between">
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
