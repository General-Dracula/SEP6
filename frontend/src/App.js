import React, { useState, useEffect } from 'react'
import MovieList from './components/MovieList'
import MovieFilter from './components/MovieFilter'
import MovieHeading from './components/MovieHeading'
import axios from 'axios'

const App = () => {
  const [movies, setMovies] = useState([])
  const [filteredMovie, setFilteredMovie] = useState('')

  useEffect(() => {
    const fetchMovies = async () => {
      const url = `http://www.omdbapi.com/?s=${filteredMovie}&apikey=263d22d8`

      const response = await axios.get(url)
      const movies = await response.data

      if (movies.Search) {
        setMovies(movies.Search)
      }
    }
    fetchMovies()
  }, [filteredMovie])

  const handleMovieFilterChange = event => {
    setFilteredMovie(event.target.value)
  }

  return (
    <div>
      <div>
        <MovieHeading heading="Movies" />
        <MovieFilter
          filteredMovie={filteredMovie}
          handleMovieFilterChange={handleMovieFilterChange}
        />
        <MovieList movies={movies} />
      </div>
    </div>
  )
}

export default App
