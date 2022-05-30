import React from 'react'
import MoviePage from './components/movies/MoviePage'
import MovieDetails from './components/movies/MovieDetails'
import Login from './components/login/Login'
import Navigation from './components/navigation/Navigation'
import AuthProvider from './components/context/AuthProvider'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'

const App = () => {
  return (
    <AuthProvider>
      <Layout>
        <Navigation />
        <Routes>
          <Route path="/:movieId" element={<MovieDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<MoviePage />} />
        </Routes>
      </Layout>
    </AuthProvider>
  )
}

export default App
