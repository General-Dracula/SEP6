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
      const url = `https://api.themoviedb.org/3/search/movie?api_key=c84dee412f07183fc9e3cc93b8e1b7f5&language=en-US&include_adult=false&query=${filteredMovie}`

      const response = await axios.get(url)
      const fetchedMovies = await response.data

      if (fetchedMovies.results) {
        setMovies(fetchedMovies.results)
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
