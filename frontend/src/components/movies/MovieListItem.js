import { Flex, Heading, Image, Text, Box } from '@chakra-ui/react'
import React, { useState, useEffect, useMemo } from 'react'
import { NavLink } from 'react-router-dom'
import { colors } from '../../utils/constants'
import { trimDate } from '../../utils/helpers'
import { useAuth } from '../context/AuthProvider'

const Movie = ({ poster_path, title, vote_average, release_date, id }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [inFavorites, setInFavorites] = useState(false)
  const { user,  addMovieToFavorites, removeMovieFromFavorites, favMoviesList } = useAuth()

  useEffect(() => {
    setInFavorites(favMoviesList.filter(movie => movie.id === id).length === 1)
  }, [favMoviesList, id])

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)

  const onFavoriteClick = async event => {
    event.preventDefault()
    if (user) {
      if(inFavorites) {
        removeMovieFromFavorites(id)
        setInFavorites(favMoviesList.filter(movie => movie.id === id).length === 1)
      } else {
        addMovieToFavorites(id)
        setInFavorites(favMoviesList.filter(movie => movie.id === id).length === 1)
      }
    }
  }

  const hoverElement = useMemo(() => {
    if(user) {
      if(inFavorites) {
        return <Image
          boxSize='1rem' 
          src='/filled_star.png'
        />
      } else {
        return <Image
          boxSize='1rem' 
          src='/empty_star.png'
        />
      }
    } else {
      return <NavLink to={'/login'}>
        <Image
          boxSize='1rem' 
          src='/empty_star.png'
        />
      </NavLink>
    }
  }, [user, inFavorites])

  const setVoteColor = () => {
    if (vote_average >= 8) {
      return 'green'
    } else if (vote_average >= 6) {
      return 'black'
    } else {
      return 'red'
    }
  }

  return (
    <Flex
      flexDir="column"
      w="13rem"
      overflow="hidden"
      gridGap="0.5rem"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      pos="relative"
      borderRadius="1rem"
    >
      {isHovered && (
        <Box
          bgColor={colors.card}
          pos="absolute"
          zIndex="100"
          top="1rem"
          left="1rem"
          p="0.5rem"
          borderRadius="0.5rem"
          onClick={onFavoriteClick}
        >
          {hoverElement}
        </Box>
      )}
      <Box
        pos='relative'
        h='20rem'
        overflow='hidden'
        borderRadius="1rem"
      >

        <Image
          w='13rem'
          borderRadius="1rem"
          src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
          alt={title}
          transitionDuration="0.3s"
          {...(isHovered
            ? {
                transform: 'scale(1.05)',
                filter: 'auto',
                blur: '2px',
              }
            : {})}
        />
      </Box>
      <Box px="0.5rem" pb="0.3rem">
        <Heading 
        m="0" 
        as="h3" 
        transitionDuration="0.3s"
        color={colors.text}
        {...(isHovered
          ? {
              color: colors.hoverText
            }
          : {})}
        >
          {title}
        </Heading>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          mt="0.3rem"
        >
          <Text m="0" fontSize="large" color={colors.text}>
            {trimDate(release_date)}
          </Text>
          <Text
            w="2rem"
            textAlign="center"
            m="0"
            color={setVoteColor()}
            fontSize="large"
            bgColor="white"
            p="0.2rem"
            borderRadius="0.5rem"
          >
            {vote_average}
          </Text>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Movie
