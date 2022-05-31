import React, { useState, useEffect } from 'react'
import movieApi from '../../utils/movieApi'
import { useParams } from 'react-router-dom'
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import MovieDetailItem from './MovieDetailItem'
import ActorCard from './ActorCard'
import { colors } from '../../utils/constants'

const MovieDetails = () => {
  const [movie, setMovie] = useState({})
  const [cast, setCast] = useState([])

  const [details, setDetails] = useState([])

  useEffect(() => {
    setDetails([
      {
        key: 'Release date',
        value: movie.release_date
      },
      {
        key: 'Runtime (minutes)',
        value: movie.runtime
      },
      {
        key: 'Tagline',
        value: movie.tagline
      },
      {
        key: 'Vote average',
        value: movie.vote_average
      },
    ])
  }, [movie])


  let { movieId } = useParams()

  useEffect(() => {
    const fetchMovie = async () => {
      const fetchedMovie = await movieApi.getMovieDetails(movieId)
      const fetchedCredits = await movieApi.getMovieCredits(movieId)
      setMovie(fetchedMovie)
      setCast(fetchedCredits.cast)
    }

    fetchMovie().catch(error => console.log(error))
  }, [movieId])

  return (
    <Flex 
      flexDir='column'
      gridGap='2rem'
      mb='3rem'
    >
      <Flex
        // alignItems='start'
        gridGap='2rem'
      >
        <Image
          w='30%'
          objectFit='contain'
          src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
          alt="movie"
          borderRadius='1.5rem'
        />
        <Flex
          flexDir='column'
          w='60%'
          // gridGap='4rem'
          justifyContent='center'
        >
        

        <Heading as='h1' fontSize='3rem'>
          {movie.title}
        </Heading>
        <Text
          fontSize='large'
        >
          {movie.overview}
        </Text>
        <Box
          bgColor={colors.details}
          pb='0.5rem'
        >
          {
            details.map(({key, value}) => (
              <MovieDetailItem
                key={key}
                detailName={key}
                detailValue={value}
              />
            ))
          }
        </Box>
          
        </Flex>
      </Flex>
      <Heading as='h1' m='0'>Actors</Heading>
      <Flex 
        flexWrap='wrap'
        gridGap='1rem'
      >
        {cast.map(member => (
          <ActorCard key={member.id} actor={member}/>
        ))}
      </Flex>
    </Flex>
  )
}

export default MovieDetails
