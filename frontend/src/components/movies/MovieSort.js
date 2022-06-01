import React, { useState } from 'react'
import { Select } from '@chakra-ui/react'
import { colors, sortCategories } from '../../utils/constants'
import { useSort } from '../context/SortProvider'

const MovieSort = () => {
  const { sortByCategory } = useSort()

  const handleChange = event => {
    event.preventDefault()
    sortByCategory(event.target.value)
  }

  return (
    <Select
      onChange={handleChange}
      bgColor={colors.card}
      style={{ color: colors.text }}
      variant="filled"
      border="none"
      borderRadius="0.5rem"
      h="2rem"
      overflow="hidden"
      _hover={{
        cursor: 'pointer',
      }}
    >
      <option value="" disabled selected hidden>
        Sort by
      </option>
      <option value={sortCategories.Rating} style={{ color: colors.text }}>
        Sort by rating
      </option>
      <option value={sortCategories.Date} style={{ color: colors.text }}>
        Sort by date
      </option>
    </Select>
  )
}

export default MovieSort
