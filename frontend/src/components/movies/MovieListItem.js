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
      w='13rem'
      overflow='hidden'
      gridGap='0.5rem'
      
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
