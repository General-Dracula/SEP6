import React, { useState, createContext, useContext } from 'react'

export const SearchContext = createContext(null)

const SearchProvider = ({ children }) => {
  const [searchText, setSearchText] = useState('')
  const [movies, setMovies] = useState([])

  const searchData = {
    searchText,
    setSearchText,
    movies,
    setMovies
  }

  return (
    <SearchContext.Provider value={searchData}>{children}</SearchContext.Provider>
  )
}

export default SearchProvider

// Helper hook to access search info easier
export const useSearch = () => {
  return useContext(SearchContext)
} 