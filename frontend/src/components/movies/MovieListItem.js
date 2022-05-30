import { Flex, Heading, Image, Text, Box } from '@chakra-ui/react'
import React, {useState} from 'react'
import { colors } from '../../utils/constants'
import { trimDate } from '../../utils/helpers'

const Movie = ({ poster_path, title, vote_average, release_date }) => {
  
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)

  const onFavoriteClick = (event) => {
    event.preventDefault()
    // functionality for adding a movie to favorite
  }

  const setVoteColor = () => {
    if (vote_average >= 8) {
      return 'green'
    } else if (vote_average >= 6) {
      return 'black' 
    } else {
      return 'red'
    }
  }

  console.log(isHovered)
  return (
    <Flex
      flexDir='column'
      w='13rem'
      overflow='hidden'
      gridGap='0.5rem'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      pos='relative'
    >

      {isHovered && <Box 
        bgColor={colors.card}
        pos='absolute'
        zIndex='100'
        top='1rem'
        left='1rem'
        p='0.5rem'
        borderRadius='0.5rem'
        onClick={onFavoriteClick}
      >
        F
      </Box>}

      <Image
        minW='100%'
        borderRadius='1rem'
        src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
        alt={title}
        transitionDuration='0.3s'
        {...isHovered ? 
          {
            filter: 'auto',
            blur:'2px'
          }
          
        :
          {}
        }
      />
      <Box
        px='0.5rem'
        pb='0.3rem'
      >
        <Heading
          m='0'
          as='h3'
          color={colors.text}
        >
          {title}
        </Heading>
        <Flex
          // bgColor='yellow'
          justifyContent='space-between'
          alignItems='center'
          mt='0.3rem'
          
        >
          <Text
            m='0'
            fontSize='large'
            color={colors.text}
          >
            {trimDate(release_date)}
          </Text>
          <Text
            w='2rem'
            textAlign='center'
            m='0'
            color={setVoteColor()}
            fontSize='large'
            bgColor='white'
            p='0.2rem'
            borderRadius='0.5rem'
          >
            {vote_average}
          </Text>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Movie
