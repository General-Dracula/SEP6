import React from 'react'

const MovieList = ({ movies }) => {
  return (
    <>
      {movies.map(movie => {
        let { id, poster_path } = movie

        return (
          <div key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
              alt="movie"
            ></img>
          </div>
        )
      })}
    </>
  )
}

export default MovieList
