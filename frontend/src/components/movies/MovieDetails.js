import React, { useState, useEffect } from 'react'
import movieApi from '../../utils/movieApi'
import { useParams } from 'react-router-dom'

const MovieDetails = () => {
  const [movie, setMovie] = useState({})
  const [cast, setCast] = useState([])
  let { movieId } = useParams()

  useEffect(() => {
    const fetchMovie = async () => {
      const fetchedMovie = await movieApi.getMovieDetails(movieId)
      const fetchedCredits = await movieApi.getMovieCredits(movieId)
      setMovie(fetchedMovie)
      setCast(fetchedCredits.cast)
    }

    fetchMovie().catch(error => console.log(error))
  }, [movieId])

  return (
    <div className="text-slate-900">
      <img
        src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
        alt="movie"
      />
      <p>Title: {movie.title}</p>
      <p>Overview: {movie.overview}</p>
      <p>Release date:{movie.release_date}</p>
      <p>Runtime (minutes): {movie.runtime}</p>
      <p>Tagline: {movie.tagline}</p>
      <p>Vote average: {movie.vote_average}</p>
      {cast.map(member => {
        return (
          <div key={member.id}>
            <img
              src={`https://image.tmdb.org/t/p/w185/${member.profile_path}`}
              alt="Human bean"
            />
            <span>{member.name}</span>
          </div>
        )
      })}
    </div>
  )
}

export default MovieDetails
