import React from 'react'

const MovieList = ({ movies }) => {
  return (
    <>
      {movies.map(movie => (
        <div key={movie.Title}>
          <img src={movie.Poster} alt="movie"></img>
        </div>
      ))}
    </>
  )
}

export default MovieList
