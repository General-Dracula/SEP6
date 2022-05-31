import React, { useState, useEffect } from 'react'
import MovieListItem from './MovieListItem'
import { useAuth } from '../context/AuthProvider'
import movieApi from '../../utils/movieApi'
import userApi from '../../utils/userApi'
import { Link } from 'react-router-dom'

const Favorites = () => {
  const [favMoviesList, setFavMoviesList] = useState([])
  const { savedEmail } = useAuth()

  useEffect(() => {
    const fetchFavs = async () => {
      const fetchedMoviesId = await userApi.getFavs(savedEmail)

      let fetchedMovies = []
      for (const movieId of fetchedMoviesId) {
        const fetchedMovie = await fetchMovie(movieId)
        fetchedMovies.push(fetchedMovie)
      }

      setFavMoviesList(fetchedMovies)
    }

    fetchFavs().catch(error => console.log(error))
  }, [savedEmail])

  const fetchMovie = async movieId => {
    const fetchedMovie = await movieApi.getMovieDetails(movieId)

    return fetchedMovie
  }

  return (
    <div>
      <h1>Favorites:</h1>
      {favMoviesList.map(movie => {
        return (
          <Link
            key={movie.id}
            to={`/${movie.id}`}
            style={{ textDecoration: 'none' }}
          >
            <MovieListItem {...movie} />
          </Link>
        )
      })}
    </div>
  )
}

export default Favorites
