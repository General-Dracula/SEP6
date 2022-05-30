import React from 'react'
import MoviePage from './components/movies/MoviePage'
import MovieDetails from './components/movies/MovieDetails'
import Login from './components/login/Login'
import Navigation from './components/navigation/Navigation'
import AuthProvider from './components/context/AuthProvider'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import SearchProvider from './components/context/SearchProvider'

const App = () => {
  return (
    <AuthProvider>
      <SearchProvider>
        <Layout>
          <Navigation />
          <Routes>
            <Route path="/:movieId" element={<MovieDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<MoviePage />} />
          </Routes>
        </Layout>
      </SearchProvider>
    </AuthProvider>
  )
}

export default App
