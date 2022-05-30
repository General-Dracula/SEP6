import React, { useState, useEffect } from 'react'
import MovieFilter from './MovieFilter'
import MovieList from './MovieList'
import api from '../../utils/movieApi'

const MoviePage = () => {
  const [movies, setMovies] = useState([])
  const [filteredMovie, setFilteredMovie] = useState('')

  useEffect(() => {
    const discoverMovies = async () => {
      const fetchedMovies = await api.getFeaturedMovies()

      if (fetchedMovies.results) {
        setMovies(fetchedMovies.results)
      }
    }
    discoverMovies().catch(error => console.log(error))
  }, [])

  const handleMovieSearch = async event => {
    event.preventDefault()

    if (filteredMovie) {
      try {
        const searchedMovies = await api.searchMovie(filteredMovie)
        setMovies(searchedMovies.results)
      } catch (error) {
        console.log(
          `Failed searching for movies: ${filteredMovie}, error: ${error}`
        )
      }
    }

    setFilteredMovie('')
  }

  return (
    <div>
      <MovieFilter
        filteredMovie={filteredMovie}
        handleMovieFilter={({ target: { value } }) => {
          setFilteredMovie(value)
        }}
        handleMovieSearch={handleMovieSearch}
      />
      <MovieList movies={movies} />
    </div>
  )
}

export default MoviePage
