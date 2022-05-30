import React from 'react'

const Movie = ({ poster_path, title, vote_average, release_date }) => {
  const setVoteColor = () => {
    if (vote_average >= 8) {
      return { color: 'green' }
    } else if (vote_average >= 6) {
      return { color: 'black' }
    } else {
      return { color: 'red' }
    }
  }

  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
        alt="movie"
      ></img>
      <div>
        <h3>{title}</h3>
        <span style={setVoteColor()}>{vote_average}</span>
        <p>{release_date}</p>
      </div>
    </div>
  )
}

export default Movie
