import React, { useState, useEffect } from 'react'
import movieApi from '../../utils/movieApi'
import { useParams } from 'react-router-dom'
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import MovieDetailItem from './MovieDetailItem'
import ActorCard from './ActorCard'

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
        w='50%'
        // gridGap='4rem'
        justifyContent='center'
      >
      

      <Heading as='h1' size='2xl'>
        {movie.title}
      </Heading>
      <Text
        fontSize='smaller'
      >
        {movie.overview}
      </Text>
      <Box
        bgColor='gray'
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
