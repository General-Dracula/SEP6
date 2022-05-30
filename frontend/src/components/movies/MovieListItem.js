import { Flex, Heading, Image, Text, Box } from '@chakra-ui/react'
import React from 'react'
import { colors } from '../../utils/constants'
import { trimDate } from '../../utils/helpers'

const Movie = ({ poster_path, title, vote_average, release_date }) => {
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
      flexDir='column'
      w='7rem'
      overflow='hidden'
      gridGap='0.5rem'
      mb='1.5rem'
    >
      <Image
        minW='100%'
        borderRadius='1rem'
        src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
        alt="movie"
      ></Image>
      <Box
        px='0.5rem'
        pb='0.3rem'
      >
        <Heading
          m='0'
          as='h5' 
          size='md'
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
            fontSize='smaller'
            color={colors.text}
          >
            {trimDate(release_date)}
          </Text>
          <Text
            m='0'
            color={setVoteColor()}
            fontSize='smaller'
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
