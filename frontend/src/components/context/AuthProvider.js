import React, { useState, createContext, useContext, useEffect } from 'react'
import userApi from '../../utils/userApi'
import movieApi from '../../utils/movieApi'

const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false)
  const [savedEmail, setSavedEmail] = useState('')
  const [favMoviesList, setFavMoviesList] = useState([])

  const handleLogin = async (email, password) => {
    const success = await userApi.loginUser(email, password)

    if (success) {
      setUser(true)
      setSavedEmail(email)
    }

    return success
  }

  const handleLogout = () => {
    setUser(false)
  }

  const handleSignup = async (email, password) => {
    const success = await userApi.signupUser(email, password)

    return success
  }


  const fetchMovie = async movieId => {
    const fetchedMovie = await movieApi.getMovieDetails(movieId)

    return fetchedMovie
  }
  
  useEffect(() => {
    const fetchFavs = async () => {
      const fetchedMoviesId = await userApi.getFavs(savedEmail)
      const fetchedMovies = []
      fetchedMoviesId.forEach(async movieId => {

        const fetchedMovie = await fetchMovie(movieId)
        fetchedMovies.push(fetchedMovie)
      })

      setFavMoviesList(fetchedMovies)
    }

    fetchFavs().catch(error => console.log(error))
  }, [savedEmail])

  const addMovieToFavorites = async (movieId) => {
    if(savedEmail) {
      await userApi.addToFav(savedEmail, movieId)
      const addedMovie = await fetchMovie(movieId)
      setFavMoviesList([...favMoviesList, addedMovie])
    }
  }

  const removeMovieFromFavorites = async (movieId) => {
    if(savedEmail) {
      await userApi.removeFromFav(savedEmail, movieId)
      setFavMoviesList(favMoviesList.filter(movie => movie.id !== movieId))
    }
  }

  const isMovieInFav = movieId => favMoviesList.filter(movie => movie.id === movieId).length === 1


  const loginData = {
    user,
    savedEmail,
    onLogin: handleLogin,
    onLogout: handleLogout,
    onSignup: handleSignup,
    addMovieToFavorites,
    removeMovieFromFavorites,
    favMoviesList,
    isMovieInFav,
  }

  return (
    <AuthContext.Provider value={loginData}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider

// Helper hook to access auth info easier
export const useAuth = () => {
  return useContext(AuthContext)
}
