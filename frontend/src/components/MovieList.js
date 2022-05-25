import React from 'react'

const MovieList = ({ movies }) => {
  return (
    <>
      {movies.map(movie => (
        <div>
          <img src={movie.Poster} alt="movie"></img>
        </div>
      ))}
    </>
  )
}

export default MovieList
