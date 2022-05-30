import axios from 'axios'
const baseUrl = 'https://api.themoviedb.org'

const getConfig = async () => {
  const response = await axios.get(`${baseUrl}/3/configuration`, {
    params: { api_key: process.env.REACT_APP_API_KEY },
  })

  return response.data
}

const getLatestMovies = async () => {
  const response = await axios.get(`${baseUrl}/3/discover/movie`, {
    params: { api_key: process.env.REACT_APP_API_KEY },
  })

  return response.data
}

const getGenres = async () => {
  const response = await axios.get(`${baseUrl}/3/genres/movie/list`, {
    params: { api_key: process.env.REACT_APP_API_KEY },
  })

  return response.data
}

const searchMovie = async movieName => {
  const response = await axios.get(`${baseUrl}/3/search/movie`, {
    params: { api_key: process.env.REACT_APP_API_KEY, query: movieName },
  })

  return response.data
}

const searchByGenre = async genre => {
  const response = await axios.get(`${baseUrl}/3/discover/movie`, {
    params: { api_key: process.env.REACT_APP_API_KEY, with_genres: genre },
  })

  return response.data
}

const getFeaturedMovies = async () => {
  const response = await axios.get(`${baseUrl}/3/discover/movie`, {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
      sort_by: 'popularity.desc',
    },
  })

  return response.data
}

const getMovieDetails = async movieId => {
  const response = await axios.get(`${baseUrl}/3/movie/${movieId}`, {
    params: { api_key: process.env.REACT_APP_API_KEY },
  })

  return response.data
}

const getMovieCredits = async movieId => {
  const response = await axios.get(`${baseUrl}/3/movie/${movieId}/credits`, {
    params: { api_key: process.env.REACT_APP_API_KEY },
  })

  return response.data
}

const api = {
  getConfig,
  getLatestMovies,
  getGenres,
  searchMovie,
  searchByGenre,
  getFeaturedMovies,
  getMovieDetails,
  getMovieCredits,
}

export default api
