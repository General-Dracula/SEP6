import React from 'react'
import Movie from './Movie'

const MovieList = ({ movies }) => {
  return (
    <div className="flex flex-row flex-wrap justify-between">
      {movies.map(movie => {
        return <Movie key={movie.id} {...movie} />
      })}
    </div>
  )
}

export default MovieList
