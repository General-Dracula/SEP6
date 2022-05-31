import React from 'react'
import MoviePage from './components/movies/MoviePage'
import MovieDetails from './components/movies/MovieDetails'
import Login from './components/login/Login'
import Signup from './components/login/Signup'
import Favorites from './components/movies/Favorites'
import Navigation from './components/navigation/Navigation'
import AuthProvider from './components/context/AuthProvider'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import SearchProvider from './components/context/SearchProvider'
import StatsProvider from './components/context/StatsProvider'

const App = () => {
  return (
    <StatsProvider>
      <AuthProvider>
        <SearchProvider>
          <Layout>
            <Navigation />
            <Routes>
              <Route path="/:movieId" element={<MovieDetails />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/" element={<MoviePage />} />
            </Routes>
          </Layout>
        </SearchProvider>
      </AuthProvider>
    </StatsProvider>
  )
}

export default App
