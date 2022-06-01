import React, { createContext, useContext } from 'react'
import { sortCategories } from '../../utils/constants'
import { useSearch } from './SearchProvider'

export const SortContext = createContext(null)

const SortProvider = ({ children }) => {
  const { movies, setMovies } = useSearch()

  const sortByCategory = category => {
    let sortedMovies = [...movies]
    if (category === sortCategories.Rating) {
      sortedMovies.sort((a, b) => a.vote_average - b.vote_average)
    } else if (category === sortCategories.Date) {
      sortedMovies.sort(
        (a, b) => new Date(a.release_date) - new Date(b.release_date)
      )
    }
    setMovies(sortedMovies)
  }

  const sortData = { sortByCategory }

  return (
    <SortContext.Provider value={sortData}>{children}</SortContext.Provider>
  )
}

export default SortProvider

// Helper hook to access sort easier
export const useSort = () => {
  return useContext(SortContext)
}
