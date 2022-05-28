import React from 'react'

const Movie = ({ poster_path, title, overview, vote_average }) => {
  const setVoteColor = () => {
    if (vote_average >= 8) {
      return { color: 'green' }
    } else if (vote_average >= 6) {
      return { color: 'yellow' }
    } else {
      return { color: 'red' }
    }
  }

  return (
    <div className="w-60 my-2 rounded bg-teal">
      <img
        src={`https://image.tmdb.org/t/p/w1280/${poster_path}`}
        alt="movie"
        className="w-full h-96"
      ></img>
      <div className="flex justify-between items-center m-1">
        <h3 className="m-0 self-center">{title}</h3>
        <span className="bg-slate-800 p-2 rounded-xl" style={setVoteColor()}>
          {vote_average}
        </span>
      </div>
    </div>
  )
}

export default Movie
